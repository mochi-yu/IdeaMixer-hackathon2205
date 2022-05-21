#coding: utf-8

from sqlalchemy import Column,Integer,String,DateTime
from assets.database import Base
from datetime import datetime as dt

#データベースのテーブル情報
class groupList(Base):
    __tablename__ = "groupList"
    gropuName = Column(String(255))
    gropuId = Column(Integer,primary_key=True)
    createDate = Column(DateTime)
    postcount = Column(Integer)

    def __init__(self,name=None,article=None,timestamp=None):
        self.name = name
        self.article = article
        self.timestamp = timestamp