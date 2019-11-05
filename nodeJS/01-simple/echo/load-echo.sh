FUNC_HOST = localhost
FUNC_PORT = 7071

artillery quick \
    --count 10 \
    -n 20 \
    http://$FUNC_HOST:$FUNC_PORT/api/echo?text=howdy