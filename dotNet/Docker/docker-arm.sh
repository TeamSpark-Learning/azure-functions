echo "========================== build"
docker build \
    -t boykoant/function-dotnet-arm \
    -f Dockerfile-arm \
    .

echo "========================== login"
docker login

echo "========================== push"
docker push \
    boykoant/function-dotnet-arm