from django.test import TestCase
from endpoints.models import (
    Corretor,
    Imovel,
    Casa,
    Apartamento,
    Endereco,
    Multimidia,
    Proprietario,
)
from datetime import datetime
# Create your tests here.

class GetImoveisTest(TestCase):
    @classmethod
    def setUpTestData(cls):
    
        corretor = Corretor.objects.create(
            corretor_id="5cd7512a-3baa-47bf-9f6d-cead5e8e17a7",
            nome="John Doe",
            email="john@doe.com",
            conta_ativa=True
        )

        proprietario = Proprietario.objects.create(
            proprietario_id="4ea925a3-190c-48d5-bfc6-bfd4d2a90120",
            nome="Máicou Jéquisson"
        )
        

        casa = Casa.objects.create(
            imovel_id="d4e47550-a995-4857-940a-01f95a8eaa06",
            destaque=False,
            nome_residencia="Casa XPTO",
            comprar=False,
            alugar=True,
            preco_aluguel=1234,
            taxa_condominio=1.23,
            iptu=4.56,
            metros_quadrados=100,
            quartos_total=3,
            quartos_suite=0,
            banheiros_total=2,
            mobiliado=False,
            varanda=True,
            direcao_sol='M',
            pet_friendly=True,
            acessibilidade=True,
            estacionamento=False,
            descricao="Casa bacana com vista para a parede cinza",
            proprietario_id=proprietario,
            # especifico para casas:
            numero_andares=2,
            quintal=True,
            data_insercao=datetime.strptime("2024-04-20T21:46:13.284Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
            data_ultima_modificacao=datetime.strptime("2024-04-20T21:46:13.284Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        )

        casa.corretagem.add(corretor)

        apto = Apartamento.objects.create(
            imovel_id="aa237ec1-2224-41cb-afa3-dc70cc23a96e",
            destaque=False,
            nome_residencia="Residência XPTO",
            comprar=True,
            alugar=True,
            preco_compra=999999,
            preco_aluguel=1234,
            taxa_condominio=1.23,
            iptu=4.56,
            metros_quadrados=50,
            quartos_total=2,
            quartos_suite=1,
            banheiros_total=2,
            mobiliado=True,
            varanda=True,
            direcao_sol='M',
            pet_friendly=True,
            acessibilidade=True,
            estacionamento=False,
            descricao="Apartamento fenomenal.",
            proprietario_id=proprietario,
            # especifico para apartamentos:
            andar=12,
            descricao_predio="...",
            data_insercao=datetime.strptime("2024-04-20T21:46:13.284Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
            data_ultima_modificacao=datetime.strptime("2024-04-20T21:46:13.284Z", "%Y-%m-%dT%H:%M:%S.%fZ"),
        )

        apto.corretagem.add(corretor)

        endereco_casa = Endereco.objects.create(
            imovel_id=casa,
            descricao_endereco="bairro tranquilo",
            lat=-1,
            lon=-2,
            perto_transporte_publico=False
        )

        endereco_apto = Endereco.objects.create(
            imovel_id=apto,
            descricao_endereco="centro da cidade",
            lat=10,
            lon=5,
            perto_transporte_publico=True
        )

    def test_main_endpoint(self):
        response = self.client.get("/endpoints/imoveis_ativos_info_completa")
        response = response.json()
        # remove datetimes
        for x in response:
            if "data_insercao" in x:
                del x["data_insercao"]
            if "data_ultima_modificacao" in x:
                del x["data_ultima_modificacao"]
        self.maxDiff = None  # if not OK, show full message
        self.assertCountEqual(
            response,
            [
                {
                    "pk": "d4e47550-a995-4857-940a-01f95a8eaa06",
                    "images": [],
                    "destaque": False,
                    "nome_residencia": "Casa XPTO",
                    "comprar": False,
                    "preco_compra": None,
                    "alugar": True,
                    "preco_aluguel": "1234.00",
                    "taxa_condominio": "1.23",
                    "iptu": "4.56",
                    "metros_quadrados": 100,
                    "quartos_total": 3,
                    "quartos_suite": 0,
                    "banheiros_total": 2,
                    "mobiliado": False,
                    "varanda": True,
                    "direcao_sol": "M",
                    "pet_friendly": True,
                    "acessibilidade": True,
                    "estacionamento": False,
                    "descricao": "Casa bacana com vista para a parede cinza",
                    "proprietario_id": "4ea925a3-190c-48d5-bfc6-bfd4d2a90120",
                    "corretagem": [
                        "5cd7512a-3baa-47bf-9f6d-cead5e8e17a7"
                    ]
                },
                {
                    "pk": "aa237ec1-2224-41cb-afa3-dc70cc23a96e",
                    "images": [],
                    "destaque": False,
                    "nome_residencia": "Residência XPTO",
                    "comprar": True,
                    "preco_compra": "999999.00",
                    "alugar": True,
                    "preco_aluguel": "1234.00",
                    "taxa_condominio": "1.23",
                    "iptu": "4.56",
                    "metros_quadrados": 50,
                    "quartos_total": 2,
                    "quartos_suite": 1,
                    "banheiros_total": 2,
                    "mobiliado": True,
                    "varanda": True,
                    "direcao_sol": "M",
                    "pet_friendly": True,
                    "acessibilidade": True,
                    "estacionamento": False,
                    "descricao": "Apartamento fenomenal.",
                    "proprietario_id": "4ea925a3-190c-48d5-bfc6-bfd4d2a90120",
                    "corretagem": [
                        "5cd7512a-3baa-47bf-9f6d-cead5e8e17a7"
                    ]
                }
            ]
        )