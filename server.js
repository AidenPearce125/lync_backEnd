    require("dotenv").config();
    require("express-async-errors");
    const express = require("express");
    const morgan = require("morgan");
    const connectDB = require("./src/config/db");
    const authRoutes = require("./src/routes/auth");
    const profileRoutes = require("./src/routes/profile");
    const interestRoutes = require("./src/routes/interests");
    const skillRoutes = require("./src/routes/skills");
    const serviceRoutes = require("./src/routes/services");
    const eventRoutes = require("./src/routes/event");
    const { registerListeners } = require("./src/events");
    const errorHandler = require("./src/middleware/errorHandler");
    const path = require("path");

    const app = express();
    connectDB();
    registerListeners();

    app.use(morgan("dev"));
    app.use(express.json());
    app.use("/uploads", express.static(path.join(__dirname, "uploads")));

    app.use("/api/auth", authRoutes);
    app.use("/api/profile", profileRoutes);
    app.use("/api/event", eventRoutes);
    app.use("/api/interests", interestRoutes);
    app.use("/api/skills", skillRoutes);
    app.use("/api/services", serviceRoutes);

    app.get("/", (req, res) => res.json({ ok: true }));

    app.use(errorHandler);

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
