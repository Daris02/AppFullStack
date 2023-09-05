import express from "express";
import { router } from "./src/users/router.js";
import cors from 'cors';

const corsOptions = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  }

const server = express();
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());
server.use(router);

server.listen(PORT, () => {console.log(`Server listening at http://loaclhost:${PORT}`)});
