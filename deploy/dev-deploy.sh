#!/bin/bash

# install dependencies
# pip install -r requirements.txt
# npm install

# running services in background
cd ./services/api/ && source venv/bin/activate && python server.py &
cd ./services/webapp/ && npm start & 