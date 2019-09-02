import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();

// Add CORS headers for allowing outside applications to be able to access
// resources.  See library documentation for more options
// (i.e., whitelisting domains): https://github.com/expressjs/cors
app.use(cors());

app.get("/", (req, res) => {
	res.send("hello world");
});

app.listen(3000, () => console.log("listening on port 3000"));
