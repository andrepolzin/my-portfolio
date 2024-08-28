import { useEffect } from "react"
import ProjectList from "../components/ProjectList"
import projects from "../data/projects.json"


const Projects = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [])

  return (
    <div>
      <ProjectList projects={projects}/>
    </div>
  )
}

export default Projects