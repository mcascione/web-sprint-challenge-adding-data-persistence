const express = require("express");
const Project = require("./model");
const { validateProject } = require("./middleware");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await Project.Find();
    const formattedProjects = projects.map((project) => ({
      ...project,
      project_completed: project.project_completed === 1 ? true : false,
    }));
    res.status(200).json(formattedProjects);
  } catch (err) {
    next(err);
  }
});

router.post("/", validateProject, async (req, res, next) => {
  try {
    const newProject = await Project.Create(req.body);
    const formattedNewProject = {
      ...newProject,
      project_completed: Boolean(newProject.project_completed),
    };
    res.status(201).json(formattedNewProject);
  } catch (err) {
    next(err);
  }
});

//eslint-disable-next-line
router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    customMessage: "something went wrong in the project router",
  })
});

module.exports = router;
