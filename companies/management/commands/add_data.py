"""Custom function to add data from csv file to the local sqlite database.
> Please migrate data before using this module
"""

import pandas as pd
from django.core.management.base import BaseCommand
from sqlalchemy import create_engine
from companies.models import Company

class Command(BaseCommand):
    """Command class to add data from csv to migrated models, inherits from BaseCommand cass

    Args:
        BaseCommand (_type_): _description_
    """
    help = "Command to add data from a csv file"

    def handle(self, *args, **options):

        csv_file_path = 'sp500_companies.csv'   # source file
        df = pd.read_csv(csv_file_path) 
        
        engine = create_engine('sqlite:///db.sqlite3')  

        df.to_sql(Company._meta.db_table, if_exists='replace', con=engine, index=True)  # write csv to sql using pandas dataframe functions
        
        