from django.db import models
from django.conf import settings
from smart_community.apps.ecommerce.models.order import Order


class ShippingAddress(models.Model):
    """ShippingAddress records the destination for orders, enabling accurate delivery."""

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    order = models.OneToOneField(Order, related_name='shipping_address', on_delete=models.CASCADE)
    address_line1 = models.CharField(max_length=255)
    address_line2 = models.CharField(max_length=255, blank=True)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=20)
    country = models.CharField(max_length=100)

    def __str__(self):
        return f"Address for {self.user.username}"
