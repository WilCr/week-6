# Use lightweight nginx image
FROM nginx:alpine

# Copy nginx configuration
COPY week-6/nginx.conf /etc/nginx/nginx.conf

# Copy static files to nginx html directory
COPY week-6/index.html /usr/share/nginx/html/
COPY week-6/style.css /usr/share/nginx/html/
COPY week-6/script.js /usr/share/nginx/html/
COPY week-6/images/ /usr/share/nginx/html/images/

# Expose port 80 (Railway will map this automatically)
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
