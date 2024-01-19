from sklearn.preprocessing import OneHotEncoder
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MaxAbsScaler
from sklearn.compose import ColumnTransformer
from sklearn.compose import make_column_selector
import pandas as pd


def selection(dictionnaire):
    rating = pd.read_csv('ML_rating.csv')
    users = pd.read_csv('ML_users.csv')
    df_makeup = pd.read_csv('ML_makeup.csv')
    X = users[['Age', 'profession', 'ville']]

    ct = ColumnTransformer(
        [("scaler", MaxAbsScaler(), make_column_selector(dtype_exclude=object)),
        ("encod", OneHotEncoder(), make_column_selector(dtype_include=object))])
    ct.fit(X)
    X_transform = ct.transform(X)

    neigh = NearestNeighbors(n_neighbors=6)
    neigh.fit(X_transform)
    client = ct.transform(pd.DataFrame([dictionnaire]).reset_index())

    a = users.iloc[neigh.kneighbors(client)[1][0]]['User-ID'].values
    id_produit = rating[rating['User-ID'].isin(a)].sort_values(by='Book-Rating', ascending=False)['ISBN'].values
    df_makeup = df_makeup[df_makeup['id'].isin(id_produit)]
    return df_makeup
