from django.contrib import admin
from .models import Forum, Comment, Like


@admin.register(Forum)
class ForumAdmin(admin.ModelAdmin):
    list_display = ['title', 'created_by', 'created_at']
    search_fields = ['title', 'description']
    list_filter = ['created_at', 'created_by']


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ['content', 'forum', 'created_by', 'created_at']
    search_fields = ['content']
    list_filter = ['created_at', 'created_by']


@admin.register(Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = ['forum', 'comment', 'user', 'created_at']
    list_filter = ['created_at', 'user']