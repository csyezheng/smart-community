from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'smart_community.apps.users'

    def ready(self):
        import smart_community.apps.users.signals
