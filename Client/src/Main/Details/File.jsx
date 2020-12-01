import React, { useRef, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
const { post} = require('../../connection')
// Have not understood fileupload till now. researching

const FileUpload = props =>{
    // storing the uploaded file
    const [file, setFile] = useState(null); 
    // storing the recived file from backend

    const el = useRef();
    const handleChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        console.log(file)
    }
    
    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file);
        post('/api/'+props.type+'/post', formData).then(response=> console.log(response))
    }
    return (
        <Form>
            <div className="file-upload">
                <Form.File
                    id="Browse"
                    label={file ? file.name : 'Upload new '+props.type }
                    custom
                    onChange={handleChange}
                />
                <Button onClick={uploadFile} className="upbutton"> Upload
                </Button>
            </div>
        </Form>
    );
}
export default FileUpload;




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

// Progress function here
// , {
//     onUploadProgress: (ProgressEvent) => {
//         let progress = Math.round(progressEvent.loaded / ProgressEvent.total * 100) + '%';
//         setProgess(progress);
//     }
// }
