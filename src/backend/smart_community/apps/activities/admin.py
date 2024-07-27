from django.contrib import admin
from .models import Activity


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ['name', 'date', 'location', 'created_by', 'created_at']
    search_fields = ['name', 'description', 'location']
    list_filter = ['date', 'created_by']
