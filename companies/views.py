"""This module contains the APIs which serve the csv data, and the API to handle POST request into the database
"""

from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from companies.models import Company
from companies.serializers import CompanySerializer

@csrf_exempt    # A token to bypass csrf check
@api_view(['GET', 'POST'])  # Using decorator to create api_view, here class method can also be used
def list_companies(request):
    """_summary_
        List all companies or create a new company
    Args:
        request: Default HttpResponse
    """
    
    if request.method == 'GET':     # if GET request, return serialized query set
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    if request.method == 'POST':    # if POST request, check if the serialized request is valid and then save it in local sqlite database
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


    
        