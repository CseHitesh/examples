import { Container } from '../src/shared/infrastructure/Container';
import { Server } from '../src/shared/infrastructure/Server';
import { Configuration } from '../config';

const container = new Container();
const server = container.invoke().resolve<Server>('server');
const config = container.invoke().resolve<Configuration>('config');

server
  .start()
  .then(async () => {
    console.log(`Environment: ${config.NODE_ENV}`);
    console.log(`Log level: ${config.APP_LOG_LEVEL}`);
  })
  .catch((err: Error) => {
    console.log(err);
    process.exit(1);
  });

// this we are going to implement

//   import dotenv from "dotenv";
// import { httpServer } from "./app.js";
// import connectDB from "./db/index.js";

// dotenv.config({
//   path: "./.env",
// });

// /**
//  * Starting from Node.js v14 top-level await is available and it is only available in ES modules.
//  * This means you can not use it with common js modules or Node version < 14.
//  */
// const majorNodeVersion = +process.env.NODE_VERSION?.split(".")[0] || 0;

// const startServer = () => {
//   httpServer.listen(process.env.PORT || 8080, () => {
//     console.info(
//       `📑 Visit the documentation at: http://localhost:${
//         process.env.PORT || 8080
//       }`
//     );
//     console.log("⚙️  Server is running on port: " + process.env.PORT);
//   });
// };

// if (majorNodeVersion >= 14) {
//   try {
//     await connectDB();
//     startServer();
//   } catch (err) {
//     console.log("Mongo db connect error: ", err);
//   }
// } else {
//   connectDB()
//     .then(() => {
//       startServer();
//     })
//     .catch((err) => {
//       console.log("Mongo db connect error: ", err);
//     });
// }
