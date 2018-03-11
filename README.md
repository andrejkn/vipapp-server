## VIPAPP server

This project stack is consisted of:
- Node.js [v8]
- Koa
- ...

### Install
Follow these simple instructions in order to install the all the prerequisites for this codebase. Alternatively, you can skip this and run the app in a Docker environment.

Install **node.js**
1. Install `nvm` **n**ode **v**ersion **m**anager
```sh
$ brew install nvm
```

2. Install node.js version 8
```sh
nvm install 8
```

3. Install & run MongoDB
```sh
# create a directory where mongodb will store the data
$ sudo mkdir /data/db

# give read and write permissions to that directory
# WARNING! you are giving all users access to /data/db check the note
#  below for more secure and production-ready approach.
$ sudo chmod -R a+rw /data/db

# install
$ brew install mongodb

# run the mongodb server
$ mongod
```

**Note:** In production you should have a dedicated user for mongodb, i.e. `mongouser`, and assign ownership of this user to `/data/db`. Then only give read and write permissions to only this user and use this user to run `mongod` with.
Also, running `mongod` should be done differently in production so that it will be running in a background process on it's own.
TODO: More details about this later...

4. Install all dependencies
```sh
npm install
```

### Setup in Docker
...