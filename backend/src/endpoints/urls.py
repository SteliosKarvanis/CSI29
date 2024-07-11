from django.urls import path
from . import views

urlpatterns = [
    path("imoveis_ativos", views.imoveis_ativos, name="imoveis_ativos"),
    path("imoveis_ativos_info_completa", views.imoveis_ativos_info_completa, name="imoveis_ativos_info_completa"),
    path("corretores_foto", views.corretores_foto, name="corretores_foto"),
    path(
        "apartamentos_disponiveis",
        views.apartamentos_disponiveis,
        name="apartamentos_disponiveis",
    ),
    path("casas_disponiveis", views.casas_disponiveis, name="casas_disponiveis"),
    path(
        "imovel_detalhes/<uuid:imovel_id>",
        views.imovel_detalhes,
        name="imovel_detalhes",
    ),
    path(
        "proprietario_detalhes/<uuid:proprietario_id>",
        views.proprietario_detalhes,
        name="proprietario_detalhes",
    ),
    path(
        "multimidia_por_imovel/<uuid:imovel_id>",
        views.multimidia_por_imovel,
        name="multimidia_por_imovel",
    ),
    path("corretores_info", views.corretores_info, name="corretores_info"),
    path(
        "corretor_detalhes/<uuid:corretor_id>",
        views.corretor_detalhes,
        name="corretor_detalhes",
    ),
    path("imoveis_destaque", views.imoveis_destaque, name="imoveis_destaque"),
    path(
        "imoveis_por_proprietario/<uuid:proprietario_id>",
        views.imoveis_por_proprietario,
        name="imoveis_por_proprietario",
    ),
    path(
        "imoveis_por_corretor/<uuid:corretor_id>",
        views.imoveis_por_corretor,
        name="imoveis_por_corretor",
    ),
    path(
        "imoveis_perto_transporte_publico",
        views.imoveis_perto_transporte_publico,
        name="imoveis_perto_transporte_publico",
    ),
    path("imoveis_mobiliados", views.imoveis_mobiliados, name="imoveis_mobiliados"),
    path("imoveis_por_preco", views.imoveis_por_preco, name="imoveis_por_preco"),
    path("imoveis_por_quartos", views.imoveis_por_quartos, name="imoveis_por_quartos"),
    path(
        "imoveis_com_estacionamento",
        views.imoveis_com_estacionamento,
        name="imoveis_com_estacionamento",
    ),
    path(
        "imoveis_pet_friendly", views.imoveis_pet_friendly, name="imoveis_pet_friendly"
    ),
    path(
        "imoveis_por_direcao_sol/<str:direcao_sol>",
        views.imoveis_por_direcao_sol,
        name="imoveis_por_direcao_sol",
    ),
    path("search", views.search_imoveis, name="search_imoveis"),
]
