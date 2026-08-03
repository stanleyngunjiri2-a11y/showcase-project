import { useState } from "react";
import "./App.css";


import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import projectsData from "./data/projects";
import SearchBar from "./components/SearchBar";


function App() {
  const [projects, setProjects] = useState(projectsData);
  const [searchTerm, setSearchTerm] = useState('');


  //adding the new project functionallity
  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

//search filtering functionality  
const filteredProjects = projects.filter((project) =>
  project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  project.description.toLowerCase().includes(searchTerm.toLowerCase())
);


return (
    <div className="app">

      <Header />

<main>
      <ProjectForm addProject={addProject} />

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <ProjectList projects={filteredProjects} />
      </main>
    </div>
    
  );
}

export default App;