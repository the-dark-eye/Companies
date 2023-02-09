from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
# from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from rest_framework import status
from companies.models import Company
from companies.serializers import CompanySerializer

@csrf_exempt
@api_view(['GET', 'POST'])
def list_companies(request):
    """_summary_
        List all companies or create a new company
    Args:
        request: Default HttpResponse
    """
    
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    
        