# Initialize

```
func init --worker-runtime dotnet
```

```
func new --language C# --template http --name Redirect
func new --language C# --template http --name Headers
func new --language C# --template http --name Health
```

# Configure

```
func settings add ipstack_key
```
Provide key from https://ipstack.com/ website.

# Run locally

```
func start
```

# Deploy

```
func azure functionapp publish ms-stage-2020-func-we
func azure functionapp publish ms-stage-2020-func-ne
```

# Test
https://marketplace.visualstudio.com/items?itemName=humao.rest-client
