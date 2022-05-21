from flask import Flask, render_template
import os


app = Flask(__name__, static_folder='../dist/static', template_folder='../dist')

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

from api import api
app.register_blueprint(api, url_prefix="/api")


if __name__ == '__main__':
  app.run()