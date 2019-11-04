echo "========================== login"
docker login

echo "========================== building"
docker build \
    -t boykoant/function-node-x86 \
    -f Dockerfile-x86 \
    .

echo "========================== pushing"
docker push \
    boykoant/function-node-x86