from django.db import models

# Create your models here.
 
class Quiz(models.Model):
    Question = models.CharField(max_length=500)
    A = models.CharField(max_length=500)
    B = models.CharField(max_length=500)
    C = models.CharField(max_length=500)
    D = models.CharField(max_length=500)
    Answer = models.CharField(max_length=2)
    Skill = models.CharField(max_length=50)

    def __str__(self):
        return self.Question  
    
class Dictionary(models.Model):
    Audio = models.CharField(max_length=500)
    El = models.CharField(max_length=500)
    syn = models.CharField(max_length=500)
    vi = models.CharField(max_length=500)
    ExEla = models.CharField(max_length=500)
    ExElb = models.CharField(max_length=500)
    unit = models.CharField(max_length=100)
    ExVi = models.CharField(max_length=500)

    def __str__(self):
        return self.El  

class StudiVideo(models.Model):
    Video = models.CharField(max_length=500)
    Title = models.CharField(max_length=300)
    Themes = models.CharField(max_length=300)

    def __str__(self):
        return self.Title

class Blog(models.Model):
    Filepost = models.CharField(max_length=500)
    Title = models.CharField(max_length=5000)
    Content = models.CharField(max_length=500)

    def __str__(self):
        return self.Title

class Comment(models.Model):
    userId = models.CharField(max_length=500)
    username = models.CharField(max_length=500)
    blogId = models.CharField(max_length=500)
    body = models.CharField(max_length=1000)
    parentId = models.CharField(max_length=500)
    createdAt = models.CharField(max_length=300)
 
    def __str__(self):
        return self.username

class Customer(models.Model):
    Name = models.CharField(max_length=500)
    Birthday = models.CharField(max_length=100)
    Email = models.EmailField(max_length=200)
    Pass = models.CharField(max_length=100)
    Sex = models.CharField(max_length=200)  

    def __str__(self):
        return self.Name

