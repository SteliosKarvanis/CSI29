# from django.shortcuts import render
from django.db.models import Q
from django.http import JsonResponse
from django.core import serializers
from .models import Corretor, Imovel, Casa, Apartamento, Endereco, Multimidia, Proprietario

def imoveis_ativos(request):
    """Retorna informação dos imíveis disponíveis para compra ou aluguel."""

    imoveis_ativos = Imovel.objects.filter(Q(comprar__exact=True) | Q(alugar__exact=True))
    data = serializers.serialize("json", imoveis_ativos)
    return JsonResponse(data, safe=False)
