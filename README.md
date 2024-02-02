npm init -y
git init
touch .gitignore -----> .env,  node_modules in the file
touch README.md
npm i express cors dotenv morgan mongodb ----- (for the final project - install mongoose)
npm i --save-dev nodemon
! don't forget nodemon - globally or locally

"scripts": {
    "test": "echo "Error: no test specified" && exit 1",
    "start": "node index.js",  ----- npm start - to deploy the app
    "dev": "nodemon index.js"   ----- npm run dev - to run the app
  },
touch index.js