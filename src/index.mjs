import express from "express";
import {query} from "express-validator";

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3001;

app.get("/", (request, response)=>{
    response.status(405).send({"msg" : "Hello"})
})

app.get("/api/users", (request, response)=>{
    const { query: {name},} = request;
    console.log(name)
    response.status(200).send({
        "msg" : "Hello",
        "name" : name
    })
})

app.post("/api/users", (request, response)=>{
    const person = request.body;
    console.log(person);
    response.status(200).send(person)
})
app.listen(PORT, ()=>{
    console.log(`Running on Port ${PORT}.`)
})

export default app;