from companies.models import Company
from django.core.management.base import BaseCommand

class Command(BaseCommand):
    """Class to show data in local database. Can be used as- ```python manage.py show_data``` in bash
    """
    
    def handle(self, *args, **options):
        for it, i in enumerate(Company.objects.values()):   # interate over a query set of object values
            print(it, i['Symbol'])
            
            