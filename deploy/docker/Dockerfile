# Stage 1: Build React Frontend
FROM node:latest as react-build
WORKDIR /app
COPY services/webapp /app/
RUN apt update --fix-missing && apt install -y npm
RUN npm install
RUN npm run build

# Stage 2: Build Flask Backend
FROM python:latest as flask-build
WORKDIR /backend
COPY services/api/requirements.txt /backend/
RUN apt update && apt install -y python3 gunicorn3
RUN pip install -r requirements.txt
COPY services/api /backend/

# Stage 3: Nginx to Serve Frontend and Backend
FROM nginx:latest as nginx-build
EXPOSE 80
COPY --from=react-build /app/build/ /usr/share/nginx/html/
COPY --from=flask-build /backend/ /backend/
COPY deploy/docker/nginx.conf /etc/nginx/nginx.conf

# Copy a script to start both Nginx and Gunicorn for Flask
COPY deploy/docker/start.sh /start.sh
RUN chmod +x /start.sh

CMD ["/start.sh"]
