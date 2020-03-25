echo "========================== build"
docker build \
    -t boykoant/function-dotnet-x86 \
    -f Dockerfile-x86 \
    .

echo "========================== login"
docker login

echo "========================== push"
docker push \
    boykoant/function-dotnet-x86