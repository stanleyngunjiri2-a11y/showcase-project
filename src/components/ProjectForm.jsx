import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }


    //while adding a new project 
   const newProject = {
  id: Date.now(),
  title,
  description,
  image: "https://placehold.co/400x250?text=New+Project",
};

    addProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <section>
      <h2>Add New Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>
    </section>

  );
}

export default ProjectForm;