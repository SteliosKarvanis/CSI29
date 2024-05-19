from django.urls import path
from . import views

urlpatterns = [
    path('imoveis_ativos', views.imoveis_ativos, name='imoveis_ativos'),  # imóvel ativo: >=1 dentre os campos 'comprar' e 'alugar' vale TRUE
]
