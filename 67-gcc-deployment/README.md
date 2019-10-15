## Google Cloud Deployment

### Learning Goals

- Use `npm build` to create an optimized react build
- Describe and give examples of “platform as a service” products
- Recognize the basic components of a VM instance
- Install and boot a rails or node server on a remote VM using an SSH terminal

### Vocabulary

- Step 1 Create a production Build `npm run-script build`
- Step 2 Copy it into your backend
- Step 3 Add the route

```
get '*path', to: "application#react_app", constraints: ->(request) do
	!request.xhr? && request.format.html?
end
```

- Step 4

```
def react_app
    render :file => 'public/index.html'
end
```

- Step 3 (Node):

```
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(80);
```

git remote add origin <https://github.com/Joshua-Miles/deployment-test.git>
git push -u origin master

```

```

curl -sL [https://deb.nodesource.com/setup_1](