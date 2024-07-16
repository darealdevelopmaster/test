from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.response import Response
from .models import User, Course, Video, Book, Note, Image, models
from .serializers import UserSerializer, CourseSerializer, VideoSerializer, BookSerializer, NoteSerializer, ImageSerializer, serializers
from django.urls import path
from django.shortcuts import get_object_or_404
from pathlib import Path
from rest_framework import status
from django.apps import apps
import os


class BaseView(ListCreateAPIView, RetrieveUpdateDestroyAPIView):
    def get(self, *args, **kwargs):
        pk = kwargs.get("pk")
        if pk:
            return self.retrieve(self.request, *args, **kwargs)
        else:
            return self.list(self.request, *args, **kwargs)
    def post(self, *args, **kwargs):
        pk = kwargs.get("pk")
        if pk:
            return self.update(self.request, *args, **kwargs)
        else:
            return self.create(self.request, *args, **kwargs)

    @property
    def views(self):
        def pluralize(word: str):
            word = word.lower()
            vowels = "aeiou"
            sufixes = ("x", "s", "sh", "ch", "z")
            plural = ""
            match word:
                case word if (word.endswith("y") and not word[-2] in vowels):
                    plural = word + "s"
                case "y":
                    plural = word[:-1] + "ies"
                case word if word.endswith(sufixes):
                    plural = word + "es"
                case _:
                    plural = word + "s"
            return plural

        def first_view(word: str):
            return path(f"{pluralize(word)}/", self.as_view())
        def second_view(word: str):
            return path(f"{word}/<int:pk>/", self.as_view())

        serialiser: serializers.ModelSerializer = self.serializer_class
        model: models.Model = serialiser.Meta.model
        name: str = model._meta.model_name.lower()

        return first_view(name), second_view(name)


class UserView(BaseView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CourseView(BaseView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        course_id = response.data.get('id')
        if course_id:
            course = Course.objects.filter(id=course_id).first()
            if course:
                year = course.school_year
                name = course.title
                base = apps.get_app_config("api").path

                videos_path = Path(os.path.join(base, f"courses/year_{year}/{name}/videos"))
                videos_path.mkdir(parents=True, exist_ok=True)

                exams_path = Path(os.path.join(base, f"courses/year_{year}/{name}/exams"))
                exams_path.mkdir(parents=True, exist_ok=True)

                books_path = Path(os.path.join(base, f"courses/year_{year}/{name}/books"))
                books_path.mkdir(parents=True, exist_ok=True)

                return Response({
                    "message": "Course created and directory prepared",
                    "paths": f"{books_path}"
                }, status=status.HTTP_201_CREATED)
        return response

class VideoView(BaseView):
    queryset = Video.objects.all()
    serializer_class = VideoSerializer

class BookView(BaseView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer

class NoteView(BaseView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class ImageView(BaseView):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer



