from django.urls import path
from .views import (
    api_create_salesperson,
    api_show_salesperson,
    api_create_potentialcustomer,
    api_show_potentialcustomer,
    api_list_sales,
    api_show_saleshistory
)

urlpatterns = [
    path("sales/person/", api_create_salesperson, name="api_create_salesperson"),
    path("sales/person/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("sales/potentialcustomer/", api_create_potentialcustomer, name="api_create_potentialcustomer"),
    path("sales/potentialcustomer/<int:pk>/", api_show_potentialcustomer, name="api_show_potentialcustomer"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("sales/<int:pk>/", api_show_saleshistory, name="api_show_saleshistory"),
]