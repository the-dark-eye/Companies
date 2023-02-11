"""A module to facilitate serialization of POST and GET data
"""

from rest_framework.serializers import ModelSerializer
from companies.models import Company

class CompanySerializer(ModelSerializer):
    """Inheriting from ModelSerializer, serializing can be done manually by converting to JSON
    """
    class Meta:
        model = Company
        fields = '__all__'  # Serialize all available fields
    