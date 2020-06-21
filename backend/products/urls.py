from django.urls import path
from .views import ListCart, ListProducts, DetailCart, DeleteCart

urlpatterns = [
    path('carts/', ListCart.as_view()),
    path('products/', ListProducts.as_view()),
    path('carts/<int:pk>/', DetailCart.as_view()),
    
]
