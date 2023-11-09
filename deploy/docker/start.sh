#!/bin/sh

# Start Gunicorn
gunicorn --chdir /backend server:app -b 0.0.0.0:5000 &

# Start Nginx
nginx -g 'daemon off;'
