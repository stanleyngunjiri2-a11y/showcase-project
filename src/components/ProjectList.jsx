import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
//if someone searches for something that's not there
 if (projects.length === 0) {
    return <h2>No projects found.</h2>;
  }


  return (
    <section className="project-list">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;