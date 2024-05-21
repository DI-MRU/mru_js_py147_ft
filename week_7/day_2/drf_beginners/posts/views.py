from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from week_7.day_2.drf_beginners.posts.serializers import PostSerializer
from week_7.day_2.drf_beginners.posts.serializers import Post

@csrf_exempt
def post_view(request):
    # api/get/
    if request.method == "GET":
        queryset = Post.objects.all()
        serializer = PostSerializer(queryset, many=True)
        return JsonResponse(data=serializer.data, safe=False)

    # api/post/ body {}
    if request.method == "POST":
        article_data = JSONParser.parse(request)
        serializer = PostSerializer(data=article_data)
        if serializer.is_valid():
            serializer.save()
            return JSONParser(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def post_detail(request, article_pk):
    # api/article/1
    try
        article = Post.objects.get(pk=article_pk)
    except Post.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = PostSerializer(article)
        return JsonResponse(data=serializer.data)
    elif request.method == 'PUT':
        new_article = JSONParser(request)
        serializer = PostSerializer(article, data=new_article)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.error, status=400)
    elif request.method == 'DELETE':
        article().delete()
        return HttpResponse(status=204)
