#!/bin/bash

API = "http://localhost:4741"
URL_PATH = "/topics"

curl ${API}${URL_PATH}\
--include \
--request POST \
--header "Content-Type: application/json" \
--data '{
    "credentials": {
      "username": "'"${USERNAME}"'",
      "password": "'"${PASSWORD}"'"
    }
}'

echo
