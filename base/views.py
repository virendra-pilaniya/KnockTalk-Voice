from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import HttpResponse
from django.http import HttpResponse
from django.db.models import Q
from django.contrib.auth.decorators import login_required
from .models import Room, Topic, Message
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login, logout
from .forms import RoomForm

def loginPage(request):
    page = 'login'
    
    if request.user.is_authenticated:
        return redirect('login')
    
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, 'User does not exist')
        
        user = authenticate(request, username=username, password=password)
        
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'user or password does not exist')
            
    context = {'Page' : page}
    return render(request, 'base/login_register.html', context)

def logoutUser(request):
    logout(request)
    return redirect('home')

def registerUser(request):
    page = 'register'
    form = UserCreationForm()
    context = {'Page' : page, 'form' : form}
    
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            messages.error(request, 'An error occurred during registration')
            
    return render(request, 'base/login_register.html', context)
    
def home(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''
    room = Room.objects.filter(Q(topic__name__icontains = q) | Q(name__icontains = q) | Q(description__icontains = q))
    room_count = room.count()
    topic = Topic.objects.all()
    room_messages = Message.objects.filter(Q(room__topic__name__icontains = q))
    
    context = {'rooms' : room, 'topics' : topic, 'room_count' : room_count, 'room_messages' : room_messages}  
    return render(request, 'base/home.html', context)

def room(request, pk):
    room = Room.objects.get(id=pk)
    room_message = room.message_set.all().order_by('-created_at')
    participant = room.participants.all()
    
    if request.method == 'POST':
        message = Message.objects.create(
            user = request.user,
            room = room,
            body = request.POST.get('body')
        )
        room.participants.add(request.user)
        return redirect('room', pk=room.id)
    
    context = {'room' : room, 'room_message' : room_message, 'participants' : participant}     
    return render(request, 'base/room.html', context)

@login_required(login_url='/login')
def CreateRoom(request):
    form = RoomForm()
    
    if request.method == 'POST':
        form = RoomForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')

    context = {'form' : form}
    return render(request, 'base/room_form.html', context)

@login_required(login_url='/login')
def UpdateRoom(request, pk):
    room = Room.objects.get(id=pk)
    form = RoomForm(instance= room)
    
    if request.user != room.host:
        return HttpResponse('You are not allowed to update this room')
    
    if request.method == 'POST':
        form = RoomForm(request.POST , instance= room)
        if form.is_valid():
            form.save()
            return redirect('home')

    context = {'form' : form}
    return render(request, 'base/room_form.html', context)

@login_required(login_url='/login')
def DeleteRoom(request, pk):
    room = Room.objects.get(id=pk)
    
    if request.user != room.host:
        return HttpResponse('You are not allowed to delete this room')
    
    if request.method == 'POST':
        room.delete()
        return redirect('home')
    
    return render(request, 'base/delete.html', {'obj' : room})

def UserProfile(request, pk):
    user = User.objects.get(id=pk)
    rooms = user.room_set.all()
    room_messages = user.message_set.all()
    topics = Topic.objects.all()
    
    context = {'user': user, 'rooms': rooms, 'room_messages' : room_messages, 'topics' : topics}
    
    return render(request, 'base/user_profile.html', context)
            
@login_required(login_url='/login')
def DeleteMessage(request, pk):
    message = Message.objects.get(id=pk)
    room = message.room
    
    if request.user != message.user:
        return HttpResponse('You are not allowed to delete this message')
    
    if request.method == 'POST':
        message.delete()
        return redirect('home')
    
    return render(request, 'base/delete.html', {'obj' : message})
        