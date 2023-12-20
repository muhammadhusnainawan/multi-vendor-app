const app = require("./app");
// const connectDatabase = require("./database/Database")

// handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error : ${err.message}`);
  console.log(`shutting down the server for handling uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({
      path: "./backend/config/.env",
    });
  }
  app.get('/test', (req, res) => {
    res.send('Test route works!');
  });

//   connect database
// connectDatabase()

// create server

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})

// unhandled promise rejection
// process.on("unhandledRejection", (err)=>{
//     console.log(`Shutting down the server for ${err.message}`)
//     console.log(`Shutting down the server for unhandled promise rejection`)
//     server.close(()=>{
//         process.exit(1)
//     })
// })
