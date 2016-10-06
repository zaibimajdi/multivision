var mongoose = require('mongoose');
var Course = mongoose.model('Course');

exports.getCourses = function(req, res){
    return Course.find({}).exec(function(err, collection){
        res.send(collection);
    });
}

exports.getCourseById = function(req, res){
    Course.findOne({_id:req.params.id}).exec(function(err, item){
        res.send(item);
    })
}