import { generateStreamToken } from "../lib/stream.js";

export const getStreamToken = async (req, res) => {
  try {
    const token = generateStreamToken(req.user._id.toString());

    console.log("User ID", typeof req.user._id.toString());

    res.status(200).json({ token });
  } catch (error) {
    console.log("Error in getting stream token in chat controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
