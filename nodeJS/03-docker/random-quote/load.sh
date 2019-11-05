FUNC_HOST = 169.254.51.38
FUNC_PORT = 8080

artillery quick \
    --count 10 \
    -n 20 \
    http://$FUNC_HOST:$FUNC_PORT/api/random-quote