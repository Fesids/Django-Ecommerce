from django.urls import path
from .views import ProductViewSet
urlpatterns=[
    path("", ProductViewSet.as_view({
        "get": "retrieveList",
        "post": "save",

    })),

    path("<int:id>", ProductViewSet.as_view({
        "get": "retrieve"
    })),

    path("teste", ProductViewSet.as_view({
        "get": "teste"
    }))
]