import { Hono } from "hono";
import { getUsers, createUser } from "../controllers/user.controller";

const userRoute = new Hono();

userRoute.get("/", getUsers);
userRoute.post("/", createUser);

export default userRoute;
