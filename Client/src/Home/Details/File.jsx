import React, { useState } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
const { localhost,withAuth} = require('../../connection')


// Have not understood fileupload till now. researching

const FileUpload = props =>{
    // storing the uploaded file
    const [file, setFile] = useState(null);
    
    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file);
        axios.post(localhost+ '/api/'+props.type+'/post', formData,withAuth).then(response=> console.log(response))
    }
    return (
        <Form>
            <div className="file-upload">
                <input
                    name = 'file'
                    id={props.type}
                    label={file ? file.name : 'Upload new '+props.type }
                    type='file'
                    accept={props.type==='image' ? 'image/*': '.obj,.fbx'}
                    onChange={e => setFile(e.target.files[0])}
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
