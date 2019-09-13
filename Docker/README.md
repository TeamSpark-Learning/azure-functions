# Create project

Initialize project
```
func init MyFunctionProj --docker
```

Create first function
```
func new --name MyHttpTrigger --template "HttpTrigger"
```

Run function localy
```
func start --build
```


# Build project

Build image
```
docker build --tag <docker-id>/mydockerimage:v1.0.0 .
```

Run image localy
```
docker run -p 8080:80 -it <docker-ID>/mydockerimage:v1.0.0
```


# Publish project

Login
```
docker login --username <docker-id>
```

Publish image
```
docker push <docker-id>/mydockerimage:v1.0.0
```