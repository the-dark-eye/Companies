"""_summary_
"""

import pandas as pd
from django.core.management.base import BaseCommand
from sqlalchemy import create_engine
from companies.models import Company

class Command(BaseCommand):
    """_summary_

    Args:
        BaseCommand (_type_): _description_
    """
    help = "Command to add data from a csv file"

    def handle(self, *args, **options):

        csv_file_path = 'sp500_companies.csv'
        df = pd.read_csv(csv_file_path)
        
        engine = create_engine('sqlite:///db.sqlite3')

        df.to_sql(Company._meta.db_table, if_exists='replace', con=engine, index=True)
        
        