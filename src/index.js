import "dotenv/config";
import cors from "cors";
import express from "express";
import routes from "./routes";
import models, { sequelize } from "./models";

const app = express();

// Add CORS headers for allowing outside applications to be able to access
// resources.  See library documentation for more options
// (i.e., whitelisting domains): https://github.com/expressjs/cors
app.use(cors());

// Allows receiving of a JSON or URL Encoded payload
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// App level function used to intercept any requests and do something before
// sending a response back (i.e., defining context or authentication).
app.use((req, res, next) => {
	req.context = {
		models
		// TODO: Add current_user authentication context
	};

	// The next function is called to signalize that the middleware has finished
	// its job. Important for when middleware uses asynchronous functions.
	next();
});

app.use("/resources", routes.resource);

app.get("/", (req, res) => {
	return res.send("Recieved a GET HTTP method");
});

// Re-initialize your database on every Express server start
const eraseDatabaseOnSync = true;
sequelize.sync({ force: eraseDatabaseOnSync }).then(async () => {
	app.listen(process.env.PORT, () => {
		console.log(`Listening on port ${process.env.PORT}`);
	});
});
