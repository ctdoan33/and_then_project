var mongoose=require('mongoose');
var EntrySchema=new mongoose.Schema({
	content: {type: String},
	user: {type: String}
}, {timestamps: true})
var StorySchema=new mongoose.Schema({
	title: {type: String},
	author: {type: String},
	entries: {type: [EntrySchema]}
}, {timestamps: true});
mongoose.model("Story", StorySchema);