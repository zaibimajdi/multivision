var mongoose = require('mongoose');
var encryption = require('../utilities/encryption');
var messageScehma = mongoose.Schema({message:String});
var Message = mongoose.model('Message', messageScehma);

var userSchema = mongoose.Schema({
    firstName: {type:String, required:'{PATH} is required!'},
    lastName: {type:String, required:'{PATH} is required!'},
    userName: {
        type:String,
        required:'{PATH} is required!',
        unique:true
    },
    salt: {type:String, required:'{PATH} is required!'},
    hashed_pwd: {type:String, required:'{PATH} is required!'},
    roles: [String]
});
userSchema.methods = {
    authenticate: function(passwordToMatch){
        return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
}

var User = mongoose.model('User', userSchema);
function createDefaultUsers(){
    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            var salt, hash;

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'joe');
            User.create({firstName: 'Joe', lastName: 'Eames', userName:'joe', salt: salt, hashed_pwd:hash, roles:['admin']});

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'majdizaibi');
            User.create({firstName: 'mejdi', lastName: 'zaibi', userName:'majdizaibi', salt: salt, hashed_pwd:hash, roles:['admin']});

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'john');
            User.create({firstName: 'Jhon', lastName: 'Papa', userName:'john', salt: salt, hashed_pwd:hash, roles:[]});
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;