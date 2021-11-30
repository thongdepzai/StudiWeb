from django.db import models
from django.contrib.postgres.fields import ArrayField

# Create your models here.
 
class Quiz(models.Model):
    Question = models.CharField(max_length=500,default="")
    A = models.CharField(max_length=500,default="")
    B = models.CharField(max_length=500,default="")
    C = models.CharField(max_length=500,default="")
    D = models.CharField(max_length=500,default="")
    Answer = models.CharField(max_length=2,default="")
    Skill = models.CharField(max_length=50,default="")

    def __str__(self):
        return self.Question  
    
class Dictionary(models.Model):
    Audio = models.CharField(max_length=500,default="")
    El = models.CharField(max_length=500,default="")
    syn = models.CharField(max_length=500,default="")
    vi = models.CharField(max_length=500,default="")
    ExEla = models.CharField(max_length=500,default="")
    ExElb = models.CharField(max_length=500,default="")
    unit = models.CharField(max_length=100,default="")
    ExVi = models.CharField(max_length=500,default="")

    def __str__(self):
        return self.El  

class StudiVideo(models.Model):
    Video = models.CharField(max_length=500,default="")
    Title = models.CharField(max_length=300,default="")
    Themes = models.CharField(max_length=300,default="")

    def __str__(self):
        return self.Title

class Blog(models.Model):
    Filepost = models.CharField(max_length=500,default="")
    Title = models.CharField(max_length=5000,default="")
    Content = models.CharField(max_length=10000,default="")
    Summary = models.CharField(max_length=500 ,default="If you previously created a superuser for Django's Admin web app then you might need to create the user again.")


    def __str__(self):
        return self.Title

class Comment(models.Model):
    userId = models.CharField(max_length=500)
    username = models.CharField(max_length=500,default="")
    blogId = models.CharField(max_length=500,default="")
    body = models.CharField(max_length=1000,default=" ")
    parentId = models.CharField(max_length=500)
    createdAt = models.CharField(max_length=300,default=" ")
 
    def __str__(self):
        return self.username


class MyCourses(models.Model):
    Name = models.CharField(max_length=500,default="")
    Skill = models.CharField(max_length=100,default="")
    NameTeach = models.CharField(max_length=100,default="")
    Title = models.CharField(max_length=500,default="")
    NumberStudy = models.CharField(max_length=100,default="")
    TimeStudy = models.CharField(max_length=500,default="")
    Location = models.CharField(max_length=500,default="")
    Timedeadline = models.CharField(max_length=500,default="")
    Price = models.CharField(max_length=500,default="")
    img = models.CharField(max_length=500,default="")

    def __str__(self):
        return self.Name

class Customer(models.Model):
    Name = models.CharField(max_length=500)
    Birthday = models.CharField(max_length=100)
    Email = models.EmailField(max_length=200)
    Pass = models.CharField(max_length=100)
    Sex = models.CharField(max_length=200,default="")
    FaCourse = ArrayField(models.CharField(max_length=100,default=""),default=list)
    MyCourse = ArrayField(models.CharField(max_length=100,default=""),default=list)  

    def __str__(self):
        return self.Name


