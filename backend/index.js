import  express  from "express";
import cors from "cors";
import morgan from "morgan";
import { router } from "./router/general.router.js";
import { conexion } from "./db/databases.js";

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(router)

conexion()

app.listen(3000,()=>{
    console.log('servidor en linea');
})
