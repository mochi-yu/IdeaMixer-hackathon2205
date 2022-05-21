from flask import Blueprint, request
from flask_restful import Api, Resource
from random import *
from models import get_all

api_bp = Blueprint('api', __name__, url_prefix='/api')

# テストデータ
users = [
  { "id": "U001", "name": "ユーザ太郎", "age": 27 },
  { "id": "U002", "name": "ユーザ二郎", "age": 20 },
  { "id": "U003", "name": "ユーザ三郎", "age": 10 }
]

class Spam(Resource):
  def get(self):
    return [{'id': x.pk, 'name': x.name, 'note': x.note} for x in get_all()]

class Hello(Resource):
  def get(self):
    name = request.args.get('name')
    return { 'msg': "Hello {}".format(name) }

class Rand(Resource):
  def get(self):
    return { 'randomNumber': randint(1, 100) }

api = Api(api_bp)
api.add_resource(Spam, '/spam')
api.add_resource(Hello, '/hello')
api.add_resource(Rand, '/rand')
