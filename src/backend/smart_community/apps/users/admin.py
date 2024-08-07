from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, UserProfile


class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ['email', 'username', 'is_staff', 'is_active']


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(UserProfile)
