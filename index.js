import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/", (req, res) => {
	return res.json({ msg: "Hi, this is v2 version !!" });
});

app.listen(PORT, () => {
	console.log("server is running at port: ", PORT);
});
