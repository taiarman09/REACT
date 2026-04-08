import { Router } from "express";
import { googlesign, login, signup } from "../controler/authController.js";


const route = Router()


route.post('/signup', signup)
route.post('/login', login)
route.post('/googleSignup', googlesign)


export default route