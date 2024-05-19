from django.contrib import admin
from .models import Corretor, Imovel, Casa, Apartamento, Endereco, Multimidia, Proprietario


# ------------------------------------------------------------------------------
# CORRETOR
# ------------------------------------------------------------------------------

# admin.site.register(Corretor)
@admin.register(Corretor)
class CorretorAdminView(admin.ModelAdmin):
    list_display = ['nome']


# ------------------------------------------------------------------------------
# IMOVEL, CASA, APARTAMENTO
# ------------------------------------------------------------------------------

# admin.site.register(Imovel)
@admin.register(Imovel)
class ImovelAdminView(admin.ModelAdmin):
    list_display = ['nome_residencia', 'comprar', 'alugar', 'data_insercao', 'get_corretores']

    def get_corretores(self, obj):
        """Lista corretores associados ao anúncio do imóvel e retorna como texto."""
        return ', '.join(corretor.nome for corretor in obj.corretagem.all())
    
    get_corretores.short_description = "Corretores associados"

    def has_add_permission(self, request): # admin deve criar casa ou apartamento
        return False


class EnderecoInstanceInline(admin.TabularInline):
    model = Endereco


class MultimidiaInstanceInline(admin.TabularInline):
    model = Multimidia


# admin.site.register(Casa)
@admin.register(Casa)
class CasaAdminView(admin.ModelAdmin):
    list_display = ["get_nome_imovel", "get_data_criacao", "get_corretores"]

    # inlines permites editar entidades relacionadas a partir da View de Admin do modelo atual
    inlines = [EnderecoInstanceInline, MultimidiaInstanceInline]

    def get_nome_imovel(self, obj):
        """Pega nome do Imovel associado (lembrando que Casa herda de Imovel)."""
        return obj.imovel_ptr.nome_residencia
    
    get_nome_imovel.short_description = "Nome do imóvel"

    def get_data_criacao(self, obj):
        """Pega data de inserção do imóvel no BD."""
        return obj.imovel_ptr.data_insercao
    
    get_data_criacao.short_description = "Data de inserção"

    def get_corretores(self, obj):
        """Lista corretores associados ao anúncio do imóvel e retorna como texto."""
        return ', '.join(corretor.nome for corretor in obj.corretagem.all())
    
    get_corretores.short_description = "Corretores associados"


# admin.site.register(Apartamento)
@admin.register(Apartamento)
class ApartamentoAdminView(admin.ModelAdmin):
    list_display = ["get_nome_imovel", "get_corretores", "get_data_criacao"]

    # inlines permites editar entidades relacionadas a partir da View de Admin do modelo atual
    inlines = [EnderecoInstanceInline, MultimidiaInstanceInline]

    def get_nome_imovel(self, obj):
        """Pega nome do Imovel associado (lembrando que Apartamento herda de Imovel)."""
        return obj.imovel_ptr.nome_residencia
    
    get_nome_imovel.short_description = "Nome do imóvel"

    def get_data_criacao(self, obj):
        """Pega data de inserção do imóvel no BD."""
        return obj.imovel_ptr.data_insercao
    
    get_data_criacao.short_description = "Data de inserção"

    def get_corretores(self, obj):
        """Lista corretores associados ao anúncio do imóvel e retorna como texto."""
        return ', '.join(corretor.nome for corretor in obj.corretagem.all())
    
    get_corretores.short_description = "Corretores associados"


# ------------------------------------------------------------------------------
# ENDERECO
# ------------------------------------------------------------------------------

# admin.site.register(Endereco)
@admin.register(Endereco)
class EnderecoAdminView(admin.ModelAdmin):
    list_display = ['imovel_id', 'descricao_endereco']


# ------------------------------------------------------------------------------
# MULTIMIDIA
# ------------------------------------------------------------------------------

# admin.site.register(Multimidia)
@admin.register(Multimidia)
class MultimidiaAdminView(admin.ModelAdmin):
    list_display = ['imovel_id', 'arquivo']


# ------------------------------------------------------------------------------
# PROPRIETARIO
# ------------------------------------------------------------------------------

# admin.site.register(Proprietario)
@admin.register(Proprietario)
class ProprietarioAdminView(admin.ModelAdmin):
    list_display = ['nome', 'telefone', 'email']
