import bcrypt from "bcrypt";
import { validateData } from "../schemas/validateData.js";
import { userLoginSchema } from "../schemas/loginUser.js";
import { userRegistrationSchema } from "../schemas/registerUser.js";
import jwt from "jsonwebtoken";
import { CustomizedError } from "../utils/errors.js";

export class UserController {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }
  getUser = (req, res) => {
   
    if(!req.session) throw new CustomizedError({message: 'Please login', code: 401})
    res.json(user);
  };
  loginUser = async (req, res) => {
    const { email, password } = req.body;

    const result = validateData({ Schema: userLoginSchema, input: req.body });
    if (!result.success)
      console.log('here')
      throw new CustomizedError({
        message: "Validation error",
        code: 400,
        data: result.error.issues,
      });

    const gettedUser = await this.UserModel.getUser({ email });
    if (!gettedUser)
      throw new CustomizedError({ message: "User not found", code: 404 });

    const isCorrect = await bcrypt.compare(password, gettedUser.password);
    if (!isCorrect)
      throw new CustomizedError({
        message: "Incorrect email or password",
        code: 401,
      });
    const token = jwt.sign(gettedUser, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        sameSite: "strict",
      })
      .json({ gettedUser, token });
  };

  registerUser = async (req, res) => {
    const result = validateData({
      Schema: userRegistrationSchema,
      input: req.body,
    });
    if (!result.success)
      throw new CustomizedError({
        message: "Validation Error",
        code: 400,
        data: result.error.issues,
      });

    const gettedUser = await this.UserModel.getUser({
      email: result.data.email,
    });
    if (gettedUser)
      throw new CustomizedError({ message: "User already exists", code: 400 });

    const hashedPassword = await bcrypt.hash(result.data.password, 10);
    result.data.password = hashedPassword;
    const createdUser = await this.UserModel.createUser({ data: result.data });
    res.json(createdUser);
  };

  logoutUser = (req, res) => {
    res.clearCookie("access_token").json({
      message: "User has left",
    });
  };
}
