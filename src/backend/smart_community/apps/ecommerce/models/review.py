from django.db import models
from django.conf import settings
from smart_community.apps.ecommerce.models.product import Product


class Review(models.Model):
    """Reviews allow users to leave feedback on products, providing ratings and comments."""

    product = models.ForeignKey(Product, related_name='reviews', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    comment = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review for {self.product.name} by {self.user.username}"
