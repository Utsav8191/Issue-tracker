const Project = require('../model/project');
const Issue= require('../model/issue');

module.exports.renderProject = async (req, res)=>{
    try{
        // find the particular project that is clicked using findById query method
        let project = await Project.findById(req.params.id).populate({path: 'issues'});
        if(!project){
            return res.redirect('back');
        }
        return res.render('project', {
            title: "project page",
            project,
        });

    } catch(err){
        // handle error
        return res.redirect('back');
    }
}
module.exports.create = async (req, res)=> {
    try{
       const {name, description, author} = req.body;
       await Project.create({
        name,
        description,
        author
       })
       return res.redirect('back'); 

    } catch(err){
        // handle errors while creating
        console.log(`Error while creating project ${err}`);
        return res.redirect('back');
    }
}

module.exports.createIssue = async (req, res)=> {
    try {
       const {id} = req.params;
       const {title, description, labels, author} = req.body;
       let project = await Project.findById(id);
       if(!project) {
        console.log("Couldn't find the project", project);
        return res.redirect('back');
       }
       let issue = await Issue.create({
        title,
        description,
        labels,
        author
       })
       console.log(labels)   
       project.issues.push(issue);
       await project.save();
       return res.redirect('back'); 

    } catch(err) {
        console.log(err)
        return;
    }
}