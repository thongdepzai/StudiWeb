from django.contrib import admin
from .models import Quiz, Dictionary, StudiVideo, Blog, Comment, Customer

# Register your models here.

admin.site.register(Quiz)
admin.site.register(Dictionary)
admin.site.register(StudiVideo)
admin.site.register(Blog)
admin.site.register(Comment)
admin.site.register(Customer)