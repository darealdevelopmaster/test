from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin, Group, Permission
from django.core.validators import MaxValueValidator, MinValueValidator

# Custom User Manager
class CustomUserManager(BaseUserManager):
    def create_user(self, email, username, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, username=username, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, username, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, username, password, **extra_fields)

# User Model
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, null=False)
    username = models.CharField(max_length=50, unique=True, null=False)
    active = models.BooleanField(default=True)
    school_year = models.IntegerField(null=True, blank=True)
    joined_at = models.DateTimeField(auto_now_add=True)
    phone_number = models.CharField(max_length=15, blank=True)
    parent_number = models.CharField(max_length=15, blank=True)
    courses = models.ManyToManyField('Course', through='Enrollment', related_name='enrolled_users')
    img = models.OneToOneField('Image', null=True, blank=True, on_delete=models.SET_NULL, related_name='author')
    notes = models.ForeignKey('Note', null=True, blank=True, on_delete=models.CASCADE, related_name='user_notes')

    is_staff = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return f"<Admin {self.username}>" if self.is_staff else f"<User {self.username}>"

    groups = models.ManyToManyField(
        Group,
        related_name='custom_user_set',  # Custom related name
        blank=True,
        help_text=(
            'The groups this user belongs to. A user will get all permissions '
            'granted to each of their groups.'
        ),
        related_query_name='custom_user',
    )

    user_permissions = models.ManyToManyField(
        Permission,
        related_name='custom_user_set',  # Custom related name
        blank=True,
        help_text='Specific permissions for this user.',
        related_query_name='custom_user',
    )

# Enrollment and RoleToUser Many-to-Many Tables
class Enrollment(models.Model):
    user = models.ForeignKey('User', on_delete=models.CASCADE, related_name='user_enrollments')
    course = models.ForeignKey('Course', on_delete=models.CASCADE, related_name='course_enrollments')

# Course Model
class Course(models.Model):
    _SCHOOLYEAR_CHOICES = [
        (0, ""),
        (1, "1st sec"),
        (2, "2nd sec"),
        (3, "3rd sec"),
    ]
    title = models.CharField(max_length=100, null=False, unique=True, blank=True)
    desc = models.CharField(max_length=255, blank=True)
    price = models.FloatField(default=0.0)
    school_year = models.IntegerField(choices=_SCHOOLYEAR_CHOICES, default=3, 
                                    validators=[MinValueValidator(1), MaxValueValidator(3)])
    videos = models.ManyToManyField('Video', related_name='courses', blank=True)
    books = models.ManyToManyField('Book', related_name='courses', blank=True)
    notes = models.ManyToManyField('Note', related_name='courses', blank=True)

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(school_year__gte=1) & models.Q(school_year__lt=4),
                name="A school_year value is valid between 1 and 4",
            )
        ]

    def __str__(self):
        return self.title
    def __repr__(self):
        return self.title

# Video Model
class Video(models.Model):
    title = models.CharField(max_length=100, null=False)
    video_name = models.CharField(max_length=100, null=False)
    desc = models.CharField(max_length=255, blank=True)
    thumbnail = models.OneToOneField('Image', null=True, blank=True, on_delete=models.SET_NULL, related_name='video_thumbnail')

    def __str__(self):
        return self.title

# Book Model
class Book(models.Model):
    title = models.CharField(max_length=100, null=False)
    book_img = models.OneToOneField('Image', null=True, blank=True, on_delete=models.SET_NULL, related_name='book_image')

    def __str__(self):
        return self.title

# Note Model
class Note(models.Model):
    text = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='notes_written')
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_notes')

    def __str__(self):
        return self.text

# Image Model
class Image(models.Model):
    image_path = models.CharField(max_length=255)  # Adjusted length
    image_name = models.CharField(max_length=100)

    def __str__(self):
        return self.image_name
