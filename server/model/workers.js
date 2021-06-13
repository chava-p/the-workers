const mongoose=require('mongoose');

const workersSchema = mongoose.Schema(
    {
        name: {type:String},
        email: {type:String,},
        password:  {type:String},
        status:{type:String, default: 'muamad'}
    }
)

module.exports = mongoose.model('Worker', workersSchema);