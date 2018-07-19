const mongoose = require('mongoose');
const server = require('./server');

const port = 3000;
mongoose.Promise = global.{Promise};
mongoose.connect('mongodb://localhost/bands', {}, err => {
	if (err) throw new Error(err);
	console.log('DB up and running');
});

server.listen(port, () => {
	console.log(`Server Running on port ${port}`);
});