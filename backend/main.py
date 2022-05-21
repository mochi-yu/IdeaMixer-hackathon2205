from flask import Flask, render_template
from api import api_bp
from models import get_all, init_db, insert
import os


app = Flask(__name__, static_folder='../dist/static', template_folder='../dist')
db_uri = os.environ.get('DATABASE_URL')
app.config['SQLALCHEMY_DATABASE_URI'] = db_uri
app.register_blueprint(api_bp)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

if __name__ == '__main__':
  with app.app_context():
    init_db(app)
    if not get_all():
      insert('foo', 'This is foo.')
      insert('bar', 'This is bar.')
  app.run()