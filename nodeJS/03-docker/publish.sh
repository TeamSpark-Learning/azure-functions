ACR=jsTalks201903

docker login \
    -u $ACR \
    $ACR.azurecr.io

docker build \
    -t $ACR.azurecr.io/function-node-x86 \
    -f Dockerfile-x86 \
    .

docker push \
    $ACR.azurecr.io/function-node-x86