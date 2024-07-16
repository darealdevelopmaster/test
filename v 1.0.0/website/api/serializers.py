from rest_framework import serializers
from .models import User, Course, Video, Book, Note, Image

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'write_only_fields': ['password']}

class CourseSerializer(serializers.ModelSerializer):
    videos = serializers.PrimaryKeyRelatedField(
        queryset=Video.objects.all(), many=True, required=False
    )
    books = serializers.PrimaryKeyRelatedField(
        queryset=Book.objects.all(), many=True, required=False
    )
    notes = serializers.PrimaryKeyRelatedField(
        queryset=Note.objects.all(), many=True, required=False
    )

    def update(self, instance, validated_data):
        validated_data = {k: v for k, v in validated_data.items() if v not in [None, "", [], 0]}
        # Update the fields
        instance.title = validated_data.get('title', instance.title)
        instance.desc = validated_data.get('desc', instance.desc)
        instance.price = validated_data.get('price', instance.price)
        instance.school_year = validated_data.get('school_year', instance.school_year)
        instance.save()

        # Update many-to-many fields
        if 'videos' in validated_data:
            instance.videos.set(validated_data['videos'])
        if 'books' in validated_data:
            instance.books.set(validated_data['books'])
        if 'notes' in validated_data:
            instance.notes.set(validated_data['notes'])

        return instance

    class Meta:
        model = Course
        fields = '__all__'

class VideoSerializer(serializers.ModelSerializer):
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())
    class Meta:
        model = Video
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = '__all__'

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = '__all__'
