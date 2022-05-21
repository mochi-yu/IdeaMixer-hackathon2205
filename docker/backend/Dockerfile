FROM python:3.9.10

LABEL version="0.5"


WORKDIR /app

COPY ./Pipfile /app/Pipfile
COPY ./Pipfile.lock /app/Pipfile.lock

RUN python -m pip install --upgrade pip && \
    pip install pipenv && pipenv install --system