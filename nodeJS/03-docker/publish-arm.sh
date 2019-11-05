ACR=jsTalks201903

docker login \
    -u $ACR \
    $ACR.azurecr.io

docker build \
    -t $ACR.azurecr.io/function-node-arm \
    -f Dockerfile-arm \
    .

docker push \
    $ACR.azurecr.io/function-node-arm