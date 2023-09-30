import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import AddProject from './AddProject'
import projectsService from '../services/ProjectService'

function ProjectsList() {
    const [projects, setProjects] = useState([])

    console.log(process.env.REACT_APP_MARCOS)

    function getProjects() {
        const token = localStorage.getItem('authToken')
        //fetch the data for all projects when the component first loads
        projectsService.getAllProjects()
        .then((response) => {
            setProjects(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getProjects()
    }, [])

    function deleteProject(id){
        projectsService.deleteProject(id)
        .then(()=>{
            getProjects()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className='ProjectListPage'>
            <AddProject getProjects={getProjects}></AddProject>
            {projects.map((oneProject) => {
                return (
                    <div className="ProjectCard card" key={oneProject._id}>
                        <Link to={`/projects/${oneProject._id}`}>
                            <h3>{oneProject.title}</h3>

                        </Link>
                        <button onClick={()=>{deleteProject(oneProject._id)}}>Delete</button>
                    </div>
                )
            })}

        </div>
    )
}


//exercise

//add a functioning delete button in the EditProject.jsx component


export default ProjectsList