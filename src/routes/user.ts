import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send({ message: "Userlar" });
});

export { userRouter };
