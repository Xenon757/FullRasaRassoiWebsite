from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from base import views

router = routers.DefaultRouter()
router.register(r'orders', views.OrderView, 'orders')
router.register(r'accounts', views.accountView, 'accounts')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls) )
]
