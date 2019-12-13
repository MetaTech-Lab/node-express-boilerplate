// app.js
const express = require('express'); // Express JS

const app = express(); // Initialize Express JS

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Node server is listening at port ${PORT}`);
});
