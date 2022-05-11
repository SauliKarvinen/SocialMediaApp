import axios from "axios";

/* 
const User = mongoose.Schema({
  fistName: { type: String, required: true },
  lastName: { type: String, required: true },
  profileimg: Buffer,
  profilebackgroundimage: Buffer,
  email: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  title: String,
  organization: String,
  posts: [String],
  bio: String,
  contacts: [String],
  github: String,
  workhistory: [String],
  messages: [String],
  password: { type: String, required: true },
  refreshTokens: [String],
});
*/

export const handleSignUp = async (user) => {
  return await axios.post("http://localhost:5000/signup", user);
};
