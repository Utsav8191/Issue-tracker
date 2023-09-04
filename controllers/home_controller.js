const Project = require('../model/project');

module.exports.home = async (req, res)=> {
    try {
        const allProjects = await Project.find({});
        res.render('home', {
            title: "Home",
            allProjects
        });

    } catch(err) {
        console.log(`Couldn't render the home due to: ${err}`);
        return;
    }
}