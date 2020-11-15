import React, { useRef, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const { post } = require('../../connection')


function FileUpload() {
    const [file, setFile] = useState(''); // storing the uploaded file    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }
    const uploadFile = () => {
        const formData = new FormData(); formData.append('file', file); // appending file
        axios.post('http://localhost:8000/post', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({
                name: res.data.name,
                path: 'http://localhost:4500' + res.data.path
            })
        }).catch(err => console.log(err))
    }
    return (
        <Form>
            <div className="file-upload">
                <Form.File
                    id="Browse"
                    label={'Upload new '}
                    custom
                    onChange={handleChange}
                />
                <div className="progessBar" style={{ width: progress }}>
                    {progress}
                </div>
                <Button onClick={uploadFile} className="upbutton"> Upload
                </Button>
                <hr />
                {/* displaying received image*/}
                {data.path && <img src={data.path} alt={data.name} />}
            </div>
        </Form>
    );
} export default FileUpload;




//     <Form onSubmit={this.handleSubmit}>
//     <Form.File
//         id="Browse"
//         label={'Upload new ' + this.name}
//         custom
//         onChange={handleChange}
//     />
//     <Button classname='my-2' variant="primary" type="submit">
// Submit
// </Button> 
// </Form>