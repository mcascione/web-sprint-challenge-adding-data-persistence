const validateProject = (req, res, next) => {
    const { project_name } = req.body
    if(!project_name || typeof project_name !== 'string'){
       console.log('problem');
        next({
            status: 422,
            message: "must include a project name"
        })
    } else {
        next()
    }
}

module.exports = {
 validateProject
}