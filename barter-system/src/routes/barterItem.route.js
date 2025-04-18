import { Router } from "express";
import {
	createBarterItem,
	getAllBarterItems,
	getUserBarterItems,
	updateBarterItemStatus,
} from "../controllers/barterItem.controller.js";
const barterItemRouter = Router();

barterItemRouter.get("/health", (req, res) => {
	const originalRoute = req.originalUrl;
	return res.send(`route "${originalRoute}" is healthy `);
});
barterItemRouter.post("/", createBarterItem);
barterItemRouter.get("/", getAllBarterItems);
barterItemRouter.get("/user/:userId", getUserBarterItems);
barterItemRouter.put("/:id/status", updateBarterItemStatus);

export default barterItemRouter;
