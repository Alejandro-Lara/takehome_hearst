import { Router, Request, Response } from "express";

const router = Router();

interface User {
    id: number,
    firstName: string,
    lastName:string,
    city:string
}

let counter = 1;

const users: User[] = [
    {firstName :"Alejandro" , lastName: "Lara", city:"New York", id: counter++}
]


//Get users with exact matches for all of the given parameters. The parameter won't be checked if it's not given
router.get('/users{/:id}{/:firstName}{/:lastName}{/:city}', (req:Request, res:Response) => {
    
    let result = users;
    console.log(req.query)
    if(req.query.id){
        const numId = parseInt(req.query.id as string);
        result = result.filter(u => u.id == numId);
    }

    if(req.query.firstName){
        console.log('a')
        result = result.filter(u => u.firstName == req.query.firstName);
    }

    if(req.query.lastName){
        result = result.filter(u => u.lastName == req.query.lastName);
    }

    if(req.query.city){
        result = result.filter(u => u.city == req.query.city);
    }

    
    res.json(result);

})

// create a new user
router.post("/users", (req: Request, res: Response)=>{
    const newUser: User = {
        id: counter++,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        city: req.body.city
    }

    users.push(newUser);

    res.status(201).json(newUser);
});

export default router;

