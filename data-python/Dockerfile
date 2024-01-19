FROM python:3.11-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    curl \
    software-properties-common \
    git \
    && rm -rf /var/lib/apt/lists/*

RUN git clone https://github.com/streamlit/streamlit-example.git .

RUN pip3 install -r requirements.txt

# API
RUN pip3 install \
    simplejson \
    requests

# Dataviz
RUN pip3 install \
    seaborn \
    matplotlib \
    plotly \
    sweetviz

# Machine Learning
RUN pip3 install -U scikit-learn

# SQL
RUN pip3 install SQLAlchemy

RUN pip3 install \
    dash \
    dash_bootstrap_components \
    flask-cors \
    flask


EXPOSE 5000

HEALTHCHECK CMD curl --fail http://localhost:8501/_stcore/health
