import type { Context } from "hono";
import { User } from "../models/user.model";

export const getUsers = async (c: Context) => {
  const users = await User.find();
  console.log("Users requested");
  return c.json(users);
};

export const createUser = async (c: Context) => {
  const body = await c.req.json();
  const user = await User.create(body);
  return c.json(user, 201);
};