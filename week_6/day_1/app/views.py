from django.shortcuts import render
from app.models import Person, ImageProfile, Category, Post
from django.http import HttpResponse

# Create your views here.

def my_view(request):

    all_persons = Person.objects.all()
    print(f"{all_persons[0].first_name}")

    html_response = "<ul>"
    for i in range(len(all_persons)):
        html_response = html_response + f"<li>"
        html_response = html_response + f"{all_persons[i].first_name} {all_persons[i].last_name}"
        html_response = html_response + f"<ul>"
        html_response = html_response + f"<li><img src='{ImageProfile.objects.get(person__id=all_persons[i].id).image}' width='64px' height='64px' /></li>"
        
        all_categories = Category.objects.all()
        for j in range(len(all_categories)):
            html_response = html_response + f"<li>Categories: {all_categories[j].name}<ul>"

            all_posts = Post.objects.all()
            my_posts = all_posts.filter(author=all_persons[i].id)
            my_posts_of_category = my_posts.filter(categories=all_categories[j])
            for k in range(len(my_posts_of_category)):
                html_response = html_response + f"<li>Post: {my_posts_of_category[k].title} by {my_posts_of_category[k].author}</li>"

            html_response = html_response + f"</ul>"
        html_response = html_response + f"</li>"
        html_response = html_response + f"</ul>"
        html_response = html_response + f"</li>"
    html_response = html_response + "<ul>"

    return HttpResponse(html_response)

    # context = {}

    # return render(request, 'index.html', context)