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
        axios.post(localhost+ '/api/'+props.type+'/post', formData,withAuth).then(
            res => {
                console.log('File upload ',res)
                setFile(null)
            }
            )
    }
    return (
        <Form>
            <div className="file-upload row">
                <input
                    name = 'file'
                    id={props.type + 'Fileup'}
                    className='col-9'
                    label={file ? file.name : 'Upload new '+props.type }
                    type='file'
                    accept={props.type==='image' ? 'image/*': '.obj,.fbx'}
                    onChange={e => setFile(e.target.files[0])}
                />
                <Button onClick={uploadFile} className="upbutton col-2"> Upload
                </Button>
            </div>
        </Form>
    );
}
export default FileUpload;
