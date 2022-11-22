FROM python:3.9
ENV PYTHONUNBUFFERED 1
ADD . /Backend/
WORKDIR /Backend/
# COPY ./requirements.txt .
# COPY ./wait-for-it.sh .
RUN chmod +x ./wait-for-it.sh
RUN  pip install --upgrade pip && pip install -r requirements.txt
# ADD . /Backend/
# WORKDIR /Backend/
EXPOSE 8000