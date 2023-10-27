import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import projectsService from '../services/ProjectService'

function AddProject(props) {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [image,setImage] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        const token = localStorage.getItem('authToken')
        const newProject = {title,description,image}
        projectsService.createProject(newProject)
        .then(()=>{
            alert("Project successfully Created")
            props.getProjects()
            setTitle('')
            setDescription('')

        })
    }

    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);
     
        const uploadData = new FormData();
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
        uploadData.append("imageUrl", e.target.files[0]);
        projectsService.uploadPicture(uploadData)
          .then(response => {
            console.log("response is: ", response.data.fileUrl);
            // response carries "fileUrl" which we can use to update the state
            setImage(response.data.fileUrl);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };
     
    return (
        <div className="AddProject">
            
            <h3>Add Project</h3>
                        <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    Picture of Project
                    <input type="file" onChange={handleFileUpload} />
                </label>

                <label>
                    Title
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                </label>

                <label>
                    Description
                    <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddProject