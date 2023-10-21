from django.db import models

class account(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(null=True, max_length=200)
    phoneNum = models.IntegerField(null=True)
    address = models.TextField(null=True)

    def __str__(self):
        return self.name
    

class order(models.Model):
    user = models.ForeignKey(account, on_delete=models.CASCADE, null=True)
    name = models.CharField(null=True, max_length=50)
    foodItem = models.TextField()
    address = models.TextField(null=True)
    finished = models.BooleanField()
    date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.foodItem

