import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
	const resources = await req.context.models.Resource.findAll();
	return res.send(resources);
});

router.get("/:resourceId", async (req, res) => {
	const resource = await req.context.models.Resource.findByPk(
		req.params.resourceId
	);
	return res.send(resource);
});

router.post("/", async (req, res) => {
	const resource = await req.context.models.Resource.create({
		title: req.body.title,
		description: req.body.description,
		url: req.body.url,
		published: Date.now(),
		created: Date.now()
	});

	return res.send(resource);
});

router.delete("/:resourceId", async (req, res) => {
	const result = await req.context.models.Resource.destroy({
		where: { id: req.params.resourceId }
	});

	return res.send(true);
});

export default router;
