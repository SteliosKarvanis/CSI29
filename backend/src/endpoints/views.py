# from django.shortcuts import render
from django.db.models import Q
from django.http import HttpResponse
from django.core import serializers
from .models import (
    Corretor,
    Imovel,
    Casa,
    Apartamento,
    Endereco,
    Multimidia,
    Proprietario,
)
import json


def imoveis_ativos(request):
    """Retorna informação dos imóveis disponíveis para compra ou aluguel."""

    imoveis_ativos = Imovel.objects.filter(
        Q(comprar__exact=True) | Q(alugar__exact=True)
    )
    data = serializers.serialize("json", imoveis_ativos)
    return HttpResponse(data, content_type="application/json")


def imoveis_ativos_info_completa(request):
    # imoveis_com_extra_info = Multimidia.objects.select_related("imovel_id")
    imoveis_ativos = Imovel.objects.filter(
        Q(comprar__exact=True) | Q(alugar__exact=True)
    )
    imoveis_l = json.loads(serializers.serialize("json", imoveis_ativos))
    imoveis_l = [{'pk': v['pk'], 'images': [], **v['fields']} for v in imoveis_l]
    mm = Multimidia.objects.all()
    mm_l = json.loads(serializers.serialize("json", mm))
    for vi in imoveis_l:
        for vmm in mm_l:
            if vi['pk'] == vmm['fields']['imovel_id']:
                vi['images'].append(vmm['fields']['arquivo'])
    return HttpResponse(json.dumps(imoveis_l), content_type="application/json")


def corretores_foto(request):
    """Retorna as fotos dos corretores."""
    corretores = Corretor.objects.all()
    data = serializers.serialize("json", corretores, fields=("nome", "foto"))
    return HttpResponse(data, content_type="application/json")


def apartamentos_disponiveis(request):
    """Retorna os apartamentos disponíveis para compra ou aluguel."""
    apartamentos = Apartamento.objects.filter(
        Q(comprar__exact=True) | Q(alugar__exact=True)
    )
    data = serializers.serialize("json", apartamentos)
    return HttpResponse(data, content_type="application/json")


def casas_disponiveis(request):
    """Retorna as casas disponíveis para compra ou aluguel."""
    casas = Casa.objects.filter(Q(comprar__exact=True) | Q(alugar__exact=True))
    data = serializers.serialize("json", casas)
    return HttpResponse(data, content_type="application/json")


def imovel_detalhes(request, imovel_id):
    """Retorna detalhes de um imóvel específico."""
    try:
        imovel = Imovel.objects.get(imovel_id=imovel_id)
        data = serializers.serialize("json", [imovel])
        return HttpResponse(data, content_type="application/json")
    except Imovel.DoesNotExist:
        return HttpResponse(status=404)


def proprietario_detalhes(request, proprietario_id):
    """Retorna detalhes de um proprietário específico."""
    try:
        proprietario = Proprietario.objects.get(proprietario_id=proprietario_id)
        data = serializers.serialize("json", [proprietario])
        return HttpResponse(data, content_type="application/json")
    except Proprietario.DoesNotExist:
        return HttpResponse(status=404)


def multimidia_por_imovel(request, imovel_id):
    """Retorna todas as mídias associadas a um imóvel."""
    multimidia = Multimidia.objects.filter(imovel_id=imovel_id)
    data = serializers.serialize("json", multimidia)
    return HttpResponse(data, content_type="application/json")


def corretores_info(request):
    """Retorna as informações dos corretores com conta ativa."""
    corretores = Corretor.objects.filter(conta_ativa=True)
    data = serializers.serialize(
        "json", corretores, fields=("nome", "telefone", "email", "foto")
    )
    return HttpResponse(data, content_type="application/json")


def corretor_detalhes(request, corretor_id):
    """Retorna as informações de um corretor específico."""
    try:
        corretor = Corretor.objects.get(corretor_id=corretor_id)
        data = serializers.serialize(
            "json",
            [corretor],
            fields=("nome", "telefone", "email", "foto", "conta_ativa"),
        )
        return HttpResponse(data, content_type="application/json")
    except Corretor.DoesNotExist:
        return HttpResponse(status=404)


def imoveis_destaque(request):
    """Retorna os imóveis que estão em destaque."""
    imoveis_destaque = Imovel.objects.filter(destaque=True)
    data = serializers.serialize("json", imoveis_destaque)
    return HttpResponse(data, content_type="application/json")


def imoveis_por_proprietario(request, proprietario_id):
    """Retorna os imóveis de um proprietário específico."""
    imoveis = Imovel.objects.filter(proprietario_id=proprietario_id)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_por_corretor(request, corretor_id):
    """Retorna os imóveis gerenciados por um corretor específico."""
    corretores = Corretor.objects.get(corretor_id=corretor_id)
    imoveis = corretores.imovel_set.all()
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_perto_transporte_publico(request):
    """Retorna imóveis que estão perto de transporte público."""
    imoveis = Endereco.objects.filter(perto_transporte_publico=True)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_mobiliados(request):
    """Retorna os imóveis que são mobiliados."""
    imoveis = Imovel.objects.filter(mobiliado=True)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type='application/json')


def imoveis_por_preco(request, preco_min=None, preco_max=None, tipo=None):
    """Retorna os imóveis dentro de uma faixa de preço."""
    if tipo == "compra":
        imoveis = Imovel.objects.filter(
            comprar=True, preco_compra__gte=preco_min, preco_compra__lte=preco_max
        )
    elif tipo == "aluguel":
        imoveis = Imovel.objects.filter(
            alugar=True, preco_aluguel__gte=preco_min, preco_aluguel__lte=preco_max
        )
    else:
        return HttpResponse(status=400)

    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_por_quartos(request, quartos=None):
    """Retorna os imóveis que possuem um número específico de quartos totais ou suites."""
    imoveis = Imovel.objects.filter(quartos_total=quartos)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_com_estacionamento(request):
    """Retorna os imóveis que possuem estacionamento."""
    imoveis = Imovel.objects.filter(estacionamento=True)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_pet_friendly(request):
    """Retorna os imóveis que são pet-friendly."""
    imoveis = Imovel.objects.filter(pet_friendly=True)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")


def imoveis_por_direcao_sol(request, direcao_sol):
    """Retorna os imóveis que têm uma direção solar específica."""
    imoveis = Imovel.objects.filter(direcao_sol=direcao_sol)
    data = serializers.serialize("json", imoveis)
    return HttpResponse(data, content_type="application/json")

def search_imoveis(request):
    query = request.GET.get('query', '')
    if query:
        results_list = Imovel.objects.filter(nome_residencia__icontains=query)  # Adjust the filter as needed
    else:
        return HttpResponse([], content_type="application/json")
    
    imoveis_l = json.loads(serializers.serialize("json", results_list))
    imoveis_l = [{'pk': v['pk'], 'images': [], **v['fields']} for v in imoveis_l]
    mm = Multimidia.objects.all()
    mm_l = json.loads(serializers.serialize("json", mm))
    for vi in imoveis_l:
        for vmm in mm_l:
            if vi['pk'] == vmm['fields']['imovel_id']:
                vi['images'].append(vmm['fields']['arquivo'])
    return HttpResponse(json.dumps(imoveis_l), content_type="application/json")