import { Hono } from "hono";
import { connectDB } from "./db/connect";
import userRoute from "./routes/user.routes";

const app = new Hono();

app.route("/users", userRoute);
app.get("/", (c) => c.text("Backoffice Api is running success!"));

connectDB();

export default app;
