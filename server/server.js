const express = require("express");
const test_data = require("./data/dashboard");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send("API is up and running...");
})

app.get('/api/dashboard', (req, res) => {
    res.json(test_data);
})

app.get('/api/dashboard/:id', (req, res) => {
    const dashboardInfo = test_data.find((d) => d._id===req.params.id);
    res.send(dashboardInfo);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));