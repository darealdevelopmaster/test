from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import UserView, CourseView, VideoView, BookView, NoteView, ImageView



urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'), # get both tokens
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'), # refresh access token
    *UserView().views,
    *CourseView().views,
    *VideoView().views,
    *BookView().views,
    *NoteView().views,
    *ImageView().views,
]