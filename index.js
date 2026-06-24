// initializers
import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// routes
import appRoutes from "./src/app/routes/app.routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app, port
const app = express();
const port = process.env.PORT || 3000;

// CORS config
app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET"],
    allowedHeaders: ["Content-Type"],
  }),
);

// request body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static files, view engine
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// routes config
app.use("/", appRoutes);

// server binding
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
