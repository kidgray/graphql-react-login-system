# graphql-react-login-system

A basic Login/Register system built using the MERNG stack (MongoDB, Express.js, React, Node.js, GraphQL).

# Table of contents
- [Project Title](#project-title)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)

# Installation
[(Back to top)](#table-of-contents)

Navigate to the directory in which you want to install the project, then run the following commands:

```git init```

```git clone https://github.com/kidgray/graphql-react-login-system.git```

To install the project dependencies, navigate to the root directory of the cloned project and use
the following command:

```yarn install```

# Usage
[(Back to top)](#table-of-contents)

NOTE: This project uses the following ports:

    Client: Port 8080
    Server: Port 5050

Please make sure these ports are available for use prior to executing it.

You will need to open two separate terminals. Navigate to the root directory of the project folder on both of them.

Select one of the two terminal tabs and start the server by using the command:

```yarn run server```

On the other terminal tab, start the client by using the command:

```yarn run client```

Upon success, the client may be accessed at:

    http://localhost:8080

You may view the GraphQL Schema and manually issue queries through graphiql at 

    http://localhost:5050