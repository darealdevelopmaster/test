from django.contrib import admin
from .models import User, Enrollment, Course, Video, Book, Note, Image

# Register your models here.
class UserAdmin(admin.ModelAdmin):
    list_display = ('email', 'username', 'is_staff', 'active', 'joined_at')
    search_fields = ('email', 'username')
    list_filter = ('is_staff', 'active')
    ordering = ('email',)


class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'school_year')
    search_fields = ('title', 'desc')
    list_filter = ('school_year',)

class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'video_name', 'desc')
    search_fields = ('title', 'video_name', 'desc')

class BookAdmin(admin.ModelAdmin):
    list_display = ('title',)
    search_fields = ('title',)

class NoteAdmin(admin.ModelAdmin):
    list_display = ('text', 'user', 'course')
    search_fields = ('text', 'user__username', 'course__title')

class ImageAdmin(admin.ModelAdmin):
    list_display = ('image_name', 'image_path')
    search_fields = ('image_name', 'image_path')

admin.site.register(User, UserAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Video, VideoAdmin)
admin.site.register(Book, BookAdmin)
admin.site.register(Note, NoteAdmin)
admin.site.register(Image, ImageAdmin)
admin.site.register(Enrollment)