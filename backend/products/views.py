from rest_framework import generics
from .models import Cart, Product
from .serializers import CartSerializer, ProductSerializer
from django.views import View
from django.http import JsonResponse
# Create your views here.



class ListCart(generics.ListCreateAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class ListProducts(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class DetailCart(generics.RetrieveUpdateDestroyAPIView):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer


class DeleteCart(View):
    def post(self, request, cart_id):
        cart_obj = Cart.objects.get(id=cart_id)
        cart_obj.qunatity -= 1
        cart_obj.save()
        return JsonResponse(cart_obj)
        