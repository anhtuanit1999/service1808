const express = require('express');
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
    next();
});
app.get('/', (req, res) => res.send({ name: 'AnhTuanIT' }));

app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));