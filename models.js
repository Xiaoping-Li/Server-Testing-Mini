const mongoose = require('mongoose');
const { Schema } = mongoose;

const BandSchema = new Schema({
	name: {
		required: true,
		type: String,
	},
	genre: {
		required: true,
		type: String,
	},
});

// instance.getBandName
BandSchema.methods.getBandName = function() {
	return this.name;
};

// BandSchema.getAllBands
BandSchema.statics.getAllBands = function(cb) {
	Bind.find({}, (err, bands) => {
		if (err) return cb(err);
		cb(bands);
	});
};

const Band = mongoose.model('Band', BandSchema);
module.exports = Band;