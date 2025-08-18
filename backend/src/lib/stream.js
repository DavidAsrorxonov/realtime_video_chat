import { StreamChat } from "stream-chat";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("Missing Stream API key or secret");
}

const streamClient = new StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    return userData;
  } catch (error) {
    console.log("Error upserting user in Stream", error);
  }
};

export const generateStreamToken = async (userId) => {
  try {
    const userIdStr = userId.toString();

    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.log("Error generating Stream token", error);
  }
};
