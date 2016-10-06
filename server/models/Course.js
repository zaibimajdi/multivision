var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type:String, required:'{PATH} is required!'},
    featured: {type:Boolean, required:'{PATH} is required!'},
    published: {type:Date, required:'{PATH} is required!'},
    tags: [String]
});

var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses(){
    Course.find({}).exec(function(err, collection){
        if(collection.length === 0){
            Course.create({title: 'C# for Sociopaths', featured:true, published: new Date('01/01/2016'), tags:['c#', 'Sociopaths']});
            Course.create({title: 'javascript for Sociopaths', featured:true, published: new Date('01/04/2015'), tags:['c#', 'javascript']});
            Course.create({title: 'Visual basic for Sociopaths', featured:true, published: new Date('01/01/2016'), tags:['c#', 'visual', 'basic']});
            Course.create({title: 'C for Sociopaths', featured:true, published: new Date('01/01/2016'), tags:['c#', 'c']});
            Course.create({title: 'skills', featured:true, published: new Date('01/01/2016'), tags:['c#', 'skills']});
            Course.create({title: 'Writing code', featured:true, published: new Date('01/01/2016'), tags:['c#', 'code']});
            Course.create({title: 'C# for Sociopaths', featured:true, published: new Date('01/05/2016'), tags:['c#', 'Sociopaths']});
            Course.create({title: 'C# for Sociopaths', featured:true, published: new Date('01/06/2016'), tags:['c#', 'Sociopaths']});
            Course.create({title: 'C# for Sociopaths', featured:true, published: new Date('01/08/2016'), tags:['c#', 'Sociopaths']});
            Course.create({title: 'Unit tests', featured:true, published: new Date('30/01/2016'), tags:['unit tests']});
        }
    })
}

exports.createDefaultCourses = createDefaultCourses;