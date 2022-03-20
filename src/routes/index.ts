import * as express from "express";
import userJsonData from "../jsons/sample-users.json";


export const register = (app: express.Application) => {
    // home page
    app.get("/", (req: any, res) => {
        res.render("index",{users: userJsonData});
    });

    // about page
    app.get("/about", (req: any, res) => {
        res.render("about");
    });

    app.get("/users",(req, res)=>{
        res.send(userJsonData);
    });
};
