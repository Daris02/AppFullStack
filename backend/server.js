import 'dotenv/config'
import express from "express";
import { router } from "./src/users/router.js";

const server = express();
const PORT = process.env.PORT || 5000;

server.use(express.json());
server.use(router);

server.listen(PORT, console.log(`Server listening at http://loaclhost:${PORT}`));
