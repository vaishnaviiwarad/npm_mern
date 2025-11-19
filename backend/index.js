const express = require("express");
const app = express();

const { swaggerUi, swaggerSpec } = require('./swagger');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * /:
 *   get:
 *     summary: Check if API is working
 *     responses:
 *       200:
 *         description: Returns Hello World message
 */

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
