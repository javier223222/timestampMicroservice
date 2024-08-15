import express,{Request,Response} from 'express';
import { createServer } from 'http';
import cors from 'cors';
import DataService from './services/DataService';
import DateController from './controllers/DateController';
const dataService = new DataService();
const dateController = new DateController(dataService);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get("/",(req:Request,res:Response)=>{
  res.sendFile(__dirname + "/views/index.html");

})
app.use("/api",dateController.getRouter())


const server = createServer(app);





server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

