import bcrypt from "bcrypt";
import { validateData } from "../schemas/validateData.js";
import { userLoginSchema } from "../schemas/loginUser.js";
import { userRegistrationSchema } from "../schemas/registerUser.js";
import jwt from 'jsonwebtoken'
export class UserController {
  constructor(UserModel) {
    this.UserModel = UserModel;
  }
  loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = validateData({ Schema: userLoginSchema, input: req.body });
      if (!result.success) res.status(400).json({ error: result.error });

      const gettedUser = await this.UserModel.getUser({ email });
      if (!gettedUser) return res.status(404).json({ error: "User not found" });

      const isCorrect = await bcrypt.compare(password, gettedUser.password);
      if (!isCorrect)
        return res.status(403).json({ error: "Incorrect password or email" });
      const token = jwt.sign(gettedUser,
        process.env.SECRET_KEY
        , {expiresIn: '1h'})

      res.cookie('access-token',
        token,
        {
          httpOnly: true,
          sameSite: 'strict'
      }
      ).json({gettedUser, token});
    } catch (e) {
      console.error(`Error logging user: ${e.message}`);
    }
  };
  registerUser = async (req, res) => {
    try {
      const result = validateData(userLoginSchema, req.body);
      if (!result.success) res.status(400).json({ error: result.error });

      const gettedUser = await this.UserModel.getUser({ email: data.email });
      if (gettedUser)
        return res.status(400).json({ error: "User already exist" });

      const hashedPassword = await bcrypt.hash(data.password, 10);
      data.password = hashedPassword;
      const createdUser = await this.UserModel.createUser({ data });
      res.json(createdUser);
    } catch (e) {
      console.error(`Error creating user: ${e.message}`);
    }
  };
  
  logoutUser = async (req, res)=>{
      res.clearCookie('access_token').json({
          message: "user has left"
      })
  }
  
}
