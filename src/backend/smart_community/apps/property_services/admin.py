from django.contrib import admin
from .models import MaintenanceRequest


@admin.register(MaintenanceRequest)
class MaintenanceRequestAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'created_by', 'created_at', 'updated_at']
    search_fields = ['title', 'description']
    list_filter = ['status', 'created_at', 'created_by']
