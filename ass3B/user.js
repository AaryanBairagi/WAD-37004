import express from 'express';
import { user } from './db.js';

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) => {
  const userInfo = req.body;

  if (!userInfo) {
    return res.status(400).json({
      message: "No user data provided"
    });
  }

  const existingUser = await user.findOne({ username: userInfo.username });
  if (existingUser) {
    return res.status(409).json({
      message: "User already exists"
    });
  }

  const userPost = await user.create({
    username: userInfo.username,
    name: userInfo.name,
    password: userInfo.password
  });

  return res.status(201).json({
    message: "User created successfully"
  });
});

app.get("/user/:username", async (req, res) => {
  const username = req.params.username;

  try {
    const existingUser = await user.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      username: existingUser.username,
      name: existingUser.name
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message
    });
  }
});

app.put("/user/update", async (req, res) => {
  const { username, name, password } = req.body;

  if (!username) {
    return res.status(400).json({
      message: "Username is required to update user"
    });
  }

  const existingUser = await user.findOne({ username });
  if (existingUser) {
    await user.updateOne(
      { username },
      {
        $set: {
          name,
          password
        }
      }
    );

    return res.status(200).json({
      message: "User updated successfully"
    });
  }

  return res.status(404).json({
    message: "User not found"
  });
});

app.delete("/user/:username", async (req, res) => {
  const username = req.params.username;

  if (!username) {
    return res.status(400).json({
      message: "Username is required to delete user"
    });
  }

  const existingUser = await user.findOne({ username });
  if (!existingUser) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  await user.deleteOne({ username });

  return res.status(200).json({
    message: "User deleted successfully"
  });
});

app.listen(3500, () => {
  console.log("Server listening on port 3500");
});
