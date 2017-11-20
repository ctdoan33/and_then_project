var belt=require('../controllers/stories.js');
module.exports=function(app){
	app.get("/stories", function(req, res){
		belt.all(req, res);
	});
	app.get("/stories/:id", function(req, res){
		belt.one(req, res);
	});
	app.post("/stories", function(req, res){
		belt.create(req, res);
	});
	app.put("/stories/:id", function(req, res){
		belt.update(req, res);
	});
	app.delete("/stories/:id", function(req, res){
		belt.destroy(req, res);
	});
	app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"));
    });
};