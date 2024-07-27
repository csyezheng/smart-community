from rest_framework import serializers
from .models import Forum, Comment, Like


class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ['id', 'forum', 'comment', 'user', 'created_at']


class CommentSerializer(serializers.ModelSerializer):
    likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'forum', 'content', 'created_at', 'updated_at', 'created_by', 'likes']


class ForumSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, read_only=True)
    likes = LikeSerializer(many=True, read_only=True)

    class Meta:
        model = Forum
        fields = ['id', 'title', 'description', 'created_at', 'updated_at', 'created_by', 'comments', 'likes']
