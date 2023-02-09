from django.contrib import admin
from .models import Company

class CompanyAdmin(admin.ModelAdmin):
    list = '__all__'
    admin.site.register(Company)
