const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


const NameSchema = new Schema({
 
    name: {
        type:String,
        required:true
    }
})


var NAME_DATA = mongoose.model('NameTest', NameSchema);

module.exports = NAME_DATA;