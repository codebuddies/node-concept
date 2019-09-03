import { uuidv4 as uuid } from "uuid/v4";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	return res.send(Object.values(req.context.models.resources));
});

router.get("/:resourceId", (req, res) => {
	return res.send(req.context.models.resources[req.params.resourceId]);
});

router.post("/", (req, res) => {
	const id = uuid();
	const resource = {
		id,
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		published: Date.now(),
		created: Date.now()
	};

	// TODO: Sequelize

	return res.send(resource);
});

export default router;
