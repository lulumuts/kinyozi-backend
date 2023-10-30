const path = require("path");
const express = require("express");
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*")
//   }) 

app.get("/api",(req, res) => {
  res.json({ message: "Hello from server!" });
// try {
//   res.json({ message: "Hello from server!" });
// } catch (error){
//   console.error('An error occurred:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
// }
});

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
// });

// app.use(express.static("../client/build"));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});