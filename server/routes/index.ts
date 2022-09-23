import { Router } from "express";

const router = Router();

router.get("/menu", (req, res) => {
    res.send("Get all menu");
});

router.post("/menu", (req, res) => {
    res.send("Create a dish");
});

router.get("/menu/:id", (req, res) => {
    res.send("Get one dish");
});

router.delete("/menu/:id", (req, res) => {
    res.send("Delete a dish");
});

router.put("/menu/:id", (req, res) => {
	res.send("Update a dish")
})
export default router;
