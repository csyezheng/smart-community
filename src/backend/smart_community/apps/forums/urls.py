from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ForumViewSet, CommentViewSet, LikeViewSet


router = DefaultRouter()
router.register(r'forums', ForumViewSet)
router.register(r'comments', CommentViewSet)
router.register(r'likes', LikeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
