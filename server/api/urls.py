"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path
import os ,sys 
lib_path = os.path.abspath(os.path.join('Course'))
# thêm thư mục cần load vào trong hệ thống
sys.path.append(lib_path)
from Views.QuizViews import GetAllQuiz
from Views.StudiVideoViews import GetAllStudiVideo
from Views.DictionaryViews import GetAllDictionarry
from Views.CustomerViews import SigupView, SiginView ,UpdateListCourseView,UpdateCustomer
from Views.CommentViews import GetAllComment, UpdateComment, DeleteComment, CreateComment
from Views.BlogViews import GetAllBlog
from Views.MyCoursesView import GetAllMyCourses,PostMyCourses

urlpatterns = [
    path('admin/', admin.site.urls),
    path('quiz/' ,GetAllQuiz.as_view()),
    path('video/', GetAllStudiVideo.as_view()),
    path('dictionary/', GetAllDictionarry.as_view()),
    path('Sigup/', SigupView.as_view()),
    path('Sigin/', SiginView.as_view()),
    path('Blog/', GetAllBlog.as_view()),
    path('Comment/', GetAllComment.as_view()),
    path('Comment/update', UpdateComment.as_view()),
    path('Comment/delete', DeleteComment.as_view()),
    path('Comment/create', CreateComment.as_view()),
    path('MyCourse/', GetAllMyCourses.as_view()),
    path('MyCourse/post', PostMyCourses.as_view()),
    path('UpdateLCourse/', UpdateListCourseView.as_view()),
    path('UpdateCustomer/',UpdateCustomer.as_view()),
]
