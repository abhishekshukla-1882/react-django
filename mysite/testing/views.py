from django.shortcuts import render
from rest_framework.views import APIView
from . models import *
from rest_framework.response import Response
from . serializer import *
# Create your views here.

class Home(APIView):
	
	serializer_class = ReactSerializer

	def get(self, request):
		detail = [ {"name": detail.name,"detail": detail.designation}
		for detail in Person.objects.all()]
		return Response(detail)

	def post(self, request):

		serializer = ReactSerializer(data=request.data)
		if serializer.is_valid(raise_exception=True):
			serializer.save()
			return Response(serializer.data)

# Create your views here.
# def home(request):
#     data = Person.objects.all()
#     context = {
#         'data' : data
#     }
#     data = {
#         "success":true,
#         "data":'hrhrhhrhr'
#     }
#     # return render(request,'index.html',context)
#     return JsonResponce(data)
# ]