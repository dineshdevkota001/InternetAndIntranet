import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import ProgressBar from 'react-bootstrap/ProgressBar'
import axios from 'axios'
import { Collapse,Fade } from 'react-bootstrap';
const { localhost,withAuth} = require('../../connection')


// Have not understood fileupload till now. researching

const FileUpload = props =>{
    // storing the uploaded file
    const [file, setFile] = useState(null);
    const [selected, setselected] = useState(false)
    const [progress,setprogress] = useState(0)
    const [uploading, setuploading] = useState(false)
    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file);
        setuploading(true)
        axios.post(localhost+ '/api/'+props.type+'/post', formData, {...withAuth,onUploadProgress: progressEvent=>setprogress(progressEvent.loaded)}).then(
            res => {
                console.log('File upload ',res.data.listData)
                props.handleAddition(res.data.listData)
                setFile(null)
                console.log('file set to null')
            }).catch((err)=>{
                console.log(err)
            })
            setuploading(false)
    }
    useEffect(() => {
        setselected(!!file)
    }, [file])
    return (
        <Form>
            <div className="custom-file">
                <input
                    name = 'file'
                    id={props.type + 'Fileup'}
                    className='col-3 custom-file-input'
                    label={file ? file.name : 'Upload new '+props.type }
                    type='file'
                    accept={props.type==='image' ? 'image/*': '.obj,.glb,.gltf'}
                    onChange={e => setFile(e.target.files[0])}
                />
            <Fade in={uploading}><ProgressBar now={progress}></ProgressBar></Fade>
                <label className="custom-file-label" for={props.type + 'Fileup'}>{file? file.name:"Choose "+props.type}</label>
            </div>
            <Collapse in={selected}><Button onClick={uploadFile} className="upbutton col-2"> Upload
                </Button>
                </Collapse>
        </Form>
    );
}
export default FileUpload;
