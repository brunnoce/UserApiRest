import routes from "@/routes/routes";
import express from "express";
import morgan from "morgan";

const app: express.Application = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api", routes())

export default app