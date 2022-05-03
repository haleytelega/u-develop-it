var express = require('express');
const PORT = process.env.PORT || 3001;
var app = express();
// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})