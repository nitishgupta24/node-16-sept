const mongoose = require('mongoose');
async function connection() {
    try {
        let connect = await mongoose.connect('mongodb://localhost:27017/batch-2');
        console.log('Connected to MongoDB');

    
} catch (error) {
    console.log(error.message,'msg...');
    
}
}
module.exports = connection
