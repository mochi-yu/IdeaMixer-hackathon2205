from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from random import *
from models import *


api_bp = Blueprint('api', __name__, url_prefix='/api')

# テストデータ
users = [
  { "id": "U001", "name": "ユーザ太郎", "age": 27 },
  { "id": "U002", "name": "ユーザ二郎", "age": 20 },
  { "id": "U003", "name": "ユーザ三郎", "age": 10 }
]


class Spam(Resource):
  def get(self):
    return [{'name': x.groupName, 'id': x.groupId, 'Post': x.postCount} for x in get_all()]

class Hello(Resource):
  def get(self):
    name = request.args.get('name')
    return { 'msg': "Hello {}".format(name) }

class Rand(Resource):
  def get(self):
    return { 'randomNumber': randint(1, 100) }

class PostData(Resource):
  def get(self):
    return [{'user': data.userId, 'group': data.groupId, 'content': data.contents, 'postedAt': str(data.postedAt)} for data in getAllPost()]

  def post(self):
    addPost(request.json)
    return '', 204

class Mix(Resource):
  def get(self):
    return [{'text': data.contents} for data in getMixData()]

api = Api(api_bp)
api.add_resource(Spam, '/spam')
api.add_resource(Hello, '/hello')
api.add_resource(Rand, '/random')
api.add_resource(PostData, '/post')
api.add_resource(Mix, '/mix')
