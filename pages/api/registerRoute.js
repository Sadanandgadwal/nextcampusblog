import axios from "axios";
const API_BASE = "http://localhost:8080";
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const response = await axios.post(
        API_BASE + "/api/auth/Register",
        req.body
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      const { status, data } = error.response;
      res.status(status).json(data);
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
