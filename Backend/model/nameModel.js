const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://userone:userone@cluster0.vcc0q.mongodb.net/LibraryApp', {
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