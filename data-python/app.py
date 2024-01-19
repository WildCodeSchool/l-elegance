# save this as app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from module import tri
import pandas as pd
from sklearn.preprocessing import OneHotEncoder
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MaxAbsScaler
from sklearn.compose import ColumnTransformer
from sklearn.compose import make_column_selector
import pandas as pd
from machine_learning import selection


app = Flask(__name__)
CORS(app)

# @app.route("/")
# def hello():
#     with open("df_final",encoding='utf8') as f:
#         contents = f.readlines()
#     # json.load("./df_final")
#     return "Hello, World!"

   

@app.route('/api/<uuid>', methods=['GET', 'POST'])
def add_message(uuid):
    content = request.get_json()

    df = pd.read_csv('df_final.csv')
    df_tri = tri(content, df)
    df_tri.to_json("df_tri.json",orient = "records",force_ascii=False)

    with open("df_tri.json",encoding='utf8') as f:
        data= json.load(f)   
    return data

@app.route('/ml', methods=['GET', 'POST'])
def add_ml():
    content = request.get_json()

    cosmetic = selection(content)
    cosmetic.to_json("df_makeup.json",orient = "records",force_ascii=False)

    with open("df_makeup.json",encoding='utf8') as f:
        data= json.load(f)   
    return data

if __name__ == '__main__':
    app.run(debug=True)


    # {    "cancer": false, "chimio": true, "radio": false, "immuno": false, "demange": true,  "rougeur": true,  "seche": false,  "cutanee": false,
    # "pigment": true, "irrit": false,  "decolor": false,  "pele": false,  "desquema": false,  "eczema": false,  "psoriasis": false,  "herpes": false,
    # "alopecie": false,"allergie": false, "odora": false }