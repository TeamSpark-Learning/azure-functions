echo "========================== login"
docker login

echo "========================== building"
docker build \
    -t boykoant/function-node-arm \
    -f Dockerfile-arm \
    .

echo "========================== pushing"
docker push \
    boykoant/function-node-arm