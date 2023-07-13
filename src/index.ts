import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./routes/user.js";
const PORT = 3000;
const app = express();
app.use("/api/user", userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err.message);
  res.status(401).send(err.message);
});
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishga tushdi`);
});
