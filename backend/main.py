from flask import Flask, render_template
from api import api_bp
from models import get_all, init_db, insert
import config
import os

user = config.MYSQL_USER
password = config.MYSQL_PASSWORD
host = config.MYSQL_HOST
db_name = config.MYSQL_DATABASE

app = Flask(__name__, static_folder='../dist/static', template_folder='../dist')
app.config['SQLALCHEMY_DATABASE_URI'] = f'mysql+mysqlconnector://{user}:{password}@{host}/{db_name}?charset=utf8'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.register_blueprint(api_bp)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

if __name__ == '__main__':
  with app.app_context():
    init_db(app)
    if not get_all():
      insert()
  app.run(host='0.0.0.0',port=5000,debug=True)