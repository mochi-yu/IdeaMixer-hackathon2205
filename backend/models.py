from datetime import datetime
import random
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class GroupList(db.Model):
    __tablename__ = 'groupList'

    groupName = db.Column(db.Text)
    groupId = db.Column(db.Integer, primary_key = True)
    createdAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    postCount = db.Column(db.Integer, default = 0)

class GroupMember(db.Model):
    __tablename__ = 'groupMember'

    userId = db.Column(db.Integer)
    groupId = db.Column(db.Integer)
    addedAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    refId = db.Column(db.Integer, primary_key = True)

class UserList(db.Model):
    __tablename__ = 'userList'

    userId = db.Column(db.Integer, primary_key = True)
    userName = db.Column(db.Text)
    passWord = db.Column(db.Text)
    addedAt = db.Column(db.DateTime, nullable=False, default=datetime.now)

class PostList(db.Model):
    __tablename__ = 'postList'

    userId = db.Column(db.Integer)
    contents = db.Column(db.Text)
    groupId = db.Column(db.Text)
    postedAt = db.Column(db.DateTime, nullable=False, default=datetime.now)
    refId = db.Column(db.Integer, primary_key = True)


def init_db(app):
    db.init_app(app)
    db.create_all()

def get_all():
    return GroupList.query.order_by(GroupList.groupId).all()

def addPost(request):
    model = PostList(userId = request["userId"], contents = request["text"], groupId = 1)
    db.session.add(model)
    db.session.commit()

def getAllPost(id):
    return db.session.query(PostList).filter(GroupList.groupId == id )

def getMixData():
    data = db.session.query(PostList).all()
    return random.sample(data, 2)

def getAllGroup():
    return db.session.query(GroupList).all()

def addGroup(request):
    model = GroupList(groupName = request["name"])
    db.session.add(model)
    db.session.commit()

def insert():
    model = GroupList(groupName = "testGroup")
    db.session.add(model)
    db.session.commit()

    model = UserList(userName = "TestUser1", passWord = "pass")
    db.session.add(model)
    db.session.commit()

    model = GroupMember(userId = 1, groupId = 1)
    db.session.add(model)
    db.session.commit()

    model = PostList(userId = 1, contents = "ゲーム", groupId = 1)
    db.session.add(model)
    db.session.commit()
    model = PostList(userId = 1, contents = "宇宙", groupId = 1)
    db.session.add(model)
    db.session.commit()
