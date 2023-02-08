from companies.models import Company
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    
    def handle(self, *args, **options):
        for it, i in enumerate(Company.objects.values()):
            print(it, i['Symbol'])
            
            