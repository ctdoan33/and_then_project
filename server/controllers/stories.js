var mongoose=require('mongoose');
var Story=mongoose.model("Story");
module.exports={
	all: function(req, res){
		Story.find({}, function(err, stories){
			res.json(err ? err : stories);
		});
	},
	one: function(req, res){
		Story.findById(req.params.id, function(err, story){
			res.json(err ? err : story);
		});
	},
	create: function(req, res){
		var story=new Story(req.body);
		story.save(function(err, story){
			res.json(err ? err : story);
		});
	},
	update: function(req, res){
		Story.findByIdAndUpdate(req.params.id, req.body, function(err, story){
			res.json(err ? err : story);
		});
	},
	destroy: function(req, res){
		Story.findByIdAndRemove(req.params.id, function(err, story){
			res.json(err ? err : story);
		});
	}
};