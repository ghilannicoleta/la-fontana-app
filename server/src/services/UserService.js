import User from "../models/user.js"; // Import the user model

export default class UserService {
  async addUser(user) {
    try {
      const newUser = new User(user);
      newUser
        .save()
        .then(() => console.log("ok"))
        .catch((error) => console.log(error));
      return newUser;
    } catch (error) {
      console.log(error);
      throw new Error(`Error adding user: ${error.message}`);
    }
  }

  async login(userData) {
    try {
      const user = new User(userData);
      const foundUser = await User.findOne({
        name: userData.name,
        password: userData.password,
      });
      console.log(`login ${foundUser}`);
    } catch (error) {
      console.log(error);
      throw new Error(`Error user: ${error.message}`);
    }
  }

  async getUserById(id) {
    try {
      const user = await User.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error getting user: ${error.message}`);
    }
  }

  async updateUser(id, userData) {
    try {
      const user = await User.findByIdAndUpdate(id, userData, {
        new: true,
      });
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }
  async deleteUser(id) {
    try {
      const user = await User.findByIdAndDelete(id);
      if (!user) {
        throw new Error("User not found");
      }
      return { message: "User deleted" };
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}
