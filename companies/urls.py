"""Adding urls to views for rendering API
"""

from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_companies), # Adding API endpoint at root location - https://localhost:8000/
]
