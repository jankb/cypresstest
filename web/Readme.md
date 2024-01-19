docker build -t cypress-nginx .
docker run --name cypress-test-nginx -p 8080:80 -d cypress-nginx
