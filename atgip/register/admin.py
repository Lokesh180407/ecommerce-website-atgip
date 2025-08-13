from django.contrib import admin
from register.models import register
class registerAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'password')
admin.site.register(register, registerAdmin)

# Register your models here.
