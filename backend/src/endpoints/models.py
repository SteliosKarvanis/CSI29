from django.db import models
from django.db.models import CheckConstraint, Q
from uuid import uuid4



class Corretor(models.Model):
    """Modelo representando um corretor de imóveis"""
    corretor_id = models.UUIDField(
        primary_key=True,
        default=uuid4,
        editable=False
    )
    nome = models.CharField(
        max_length=254
    )
    telefone = models.CharField(
        max_length=11
    )
    email = models.EmailField(
        max_length=254
    )
    foto = models.ImageField(
        upload_to="corretores/"  # o destino sera ${MEDIA_ROOT}/corretores/
    )
    conta_ativa = models.BooleanField()
    
    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Imovel(models.Model):
    """Modelo representando um imóvel, seja ele casa ou apto"""
    imovel_id = models.UUIDField(
        primary_key=True,
        default=uuid4,
        editable=False
    )
    destaque = models.BooleanField()
    nome_residencia = models.CharField(
        max_length=254
    )
    comprar = models.BooleanField()  # se esta a venda (pode ser apenas aluguel...)
    preco_compra = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        null=True
    )  # ate 99.999.999,99
    alugar = models.BooleanField()  # se eh alugavel (pode ser apenas venda...)
    preco_aluguel = models.DecimalField(
        max_digits=7,
        decimal_places=2,
        null=True
    )  # ate 99.999,99
    taxa_condominio = models.DecimalField(
        max_digits=7,
        decimal_places=2,
        null=True  # null significa que nao ha taxa de condominio; alternativamente, pode usar 0
    )
    iptu = models.DecimalField(  # Imposto sobre a Propriedade Predial e Territorial Urbana
        max_digits=7,
        decimal_places=2
    )
    metros_quadrados = models.SmallIntegerField()
    quartos_total = models.SmallIntegerField()
    quartos_suite = models.SmallIntegerField()  # incluidas no quartos_total /!\
    banheiros_total = models.SmallIntegerField()
    mobiliado = models.BooleanField()
    varanda = models.BooleanField()
    direcao_sol = models.CharField(
        max_length=1,
        choices={
            "M": "Sol da manhã",
            "T": "Sol da tarde",
            "X": "Não aplicável"  # e.g., casa com janelas em lados opostos
        }
    )
    pet_friendly = models.BooleanField()
    acessibilidade = models.BooleanField()
    estacionamento = models.BooleanField()
    descricao = models.CharField(
        max_length=1022
    )
    data_insercao = models.DateTimeField(
        auto_now_add=True  # escrito na criacao da tupla no BD
    )
    data_ultima_modificacao = models.DateTimeField(
        auto_now=True  # sobrescrito a cada modif
    )
    proprietario_id = models.ForeignKey(
        "Proprietario",  # usando str pois a classe ainda sera definida, abaixo
        on_delete=models.DO_NOTHING  # R.I.P. integridade referencial
    )
    # vira uma tabela a parte por tras dos panos:
    corretagem = models.ManyToManyField(Corretor)

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Casa(Imovel):
    """Casa (tipo de imóvel)"""
    # c.f. https://docs.djangoproject.com/en/5.0/topics/db/models/#multi-table-inheritance
    numero_andares = models.SmallIntegerField()
    quintal = models.BooleanField()

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Apartamento(Imovel):
    """Apartamento (tipo de imóvel)"""
    # c.f. https://docs.djangoproject.com/en/5.0/topics/db/models/#multi-table-inheritance
    andar = models.SmallIntegerField()
    descricao_predio = models.CharField(
        max_length=1022
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Endereco(models.Model):
    """Endereco de um imóvel"""
    imovel_id = models.OneToOneField(
        Imovel,
        unique=True,
        primary_key=True,
        on_delete=models.CASCADE
    )
    descricao_endereco = models.CharField(
        max_length=1022
    )
    lat = models.FloatField()  # latitude
    lon = models.FloatField()  # longitude
    perto_transporte_publico = models.BooleanField()

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Multimidia(models.Model):
    """Descreve uma imagem ou vídeo associado a um imóvel"""
    multimidia_id = models.UUIDField(
        primary_key=True,
        default=uuid4,
        editable=False
    )
    imovel_id = models.ForeignKey(
        Imovel,
        on_delete=models.CASCADE
    )
    tipo_img_video = models.CharField(
        max_length=5,
        choices={
            "IMG": "Imagem",
            "VIDEO": "Vídeo",
        }
    )
    extensao_arquivo = models.CharField(
        max_length=5
    )  # extensao SEM O PONTO (e.g., evitar ".mp4", colocar apenas "mp4")
    arquivo = models.FileField(
        upload_to="imoveis/"  # o destino sera ${MEDIA_ROOT}/imoveis/
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name


class Proprietario(models.Model):
    """Dados de um proprietário (há 0 ou 1 por imóvel)"""
    proprietario_id = models.UUIDField(
        primary_key=True,
        default=uuid4,
        editable=False
    )
    nome = models.CharField(
        max_length=254
    )
    telefone = models.CharField(
        max_length=11
    )
    email = models.EmailField(
        max_length=254
    )

    def __str__(self):
        """String for representing the Model object."""
        return self.name