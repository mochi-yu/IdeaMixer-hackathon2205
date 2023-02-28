from flask import Blueprint, request, jsonify
from flask_restful import Api, Resource
from random import *
from models import *


api_bp = Blueprint('api', __name__, url_prefix='/api')


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
    groupId = request.args.get('id')
    return [{'user': data.userId, 'group': data.groupId.decode(), 'content': data.contents.decode(), 'postedAt': str(data.postedAt)} for data in getAllPost(groupId)]

  def post(self):
    addPost(request.json)
    return '', 204

class Mix(Resource):
  def get(self):
    return [{'text': data.contents.decode()} for data in getMixData()]

class Group(Resource):
  def get(self):
    return [{'name': data.groupName, 'id': data.groupId, 'createdAt': data.createdAt, 'postCount': data.postCount} for data in getAllGroup()]

  def post(self):
    addGroup(request.json)
    return '', 204

api = Api(api_bp)
api.add_resource(Spam, '/spam')
api.add_resource(Hello, '/hello')
api.add_resource(Rand, '/random')
api.add_resource(PostData, '/post')
api.add_resource(Mix, '/mix')
