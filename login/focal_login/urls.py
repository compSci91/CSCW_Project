from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'users', views.UserViewSet)
router.register(r'courses', views.CourseViewSet)
router.register(r'focal', views.FocalUserViewSet)
router.register(r'add_course', views.CourseCreateViewSet)

urlpatterns = [
    path(r'api/', include(router.urls)),
    path(r'', views.index, name='index')
]
