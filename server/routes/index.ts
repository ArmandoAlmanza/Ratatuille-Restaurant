import { Router } from "express";

const router = Router();


// Menu routes

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


// Blog routes

router.get("/blog", (req, res) => {
    res.send("Get all blogs");
});

router.post("/blog", (req, res) => {
    res.send("Create a blog");
});


export default router;
