from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('login/', views.loginPage, name="login"),
    path('logout/', views.logoutUser, name="logout"),
    path('register/', views.registerUser, name="register"),
    path('room/<str:pk>/', views.room, name="room"),
    path('create-room/', views.CreateRoom, name="create-room"),
    path('update-room/<str:pk>/', views.UpdateRoom, name="update-room"),
    path('delete-room/<str:pk>/', views.DeleteRoom, name="delete-room"),
    path('user-profile/<str:pk>', views.UserProfile, name="user-profile"),
    path('delete-message/<str:pk>/', views.DeleteMessage, name="delete-message"),
]
