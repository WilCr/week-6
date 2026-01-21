# Use nginx alpine image for lightweight static file serving
FROM nginx:alpine

# Copy all static files to nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY 2newcs/images/ /usr/share/nginx/html/2newcs/images/

# Expose port 80
EXPOSE 80

# Run nginx in foreground mode (required for Railway)
CMD ["nginx", "-g", "daemon off;"]
