from django.db import models

# Create your models here.
class Company(models.Model):
    """Create company model based on csv file
    """
    
    Exchange = models.CharField(max_length=3)
    Symbol = models.CharField(max_length=5, primary_key=True)
    Shortname = models.CharField(max_length=50)
    Longname = models.CharField(max_length=100)
    Sector = models.CharField(max_length=50)
    Industry = models.CharField(max_length=100)
    Currentprice = models.DecimalField(max_digits=6, decimal_places=2)
    Marketcap = models.PositiveBigIntegerField()
    Ebitda = models.BigIntegerField(blank=True, null=True)
    Revenuegrowth = models.DecimalField(max_digits=8, decimal_places=4, null=True, blank=True)
    City = models.CharField(max_length=50)
    State = models.CharField(max_length=2, blank=True, null=True)
    Country = models.CharField(max_length=50)
    Fulltimeemployees = models.PositiveIntegerField()
    Longbusinesssummary = models.TextField(max_length=5000)
    Weight = models.DecimalField(max_digits=19, decimal_places=8)
    
    class Meta:
        """Set ordering by Symbol field
        """
        ordering = ['Symbol']
    
    def __str__(self):
        return str(self.Shortname)
