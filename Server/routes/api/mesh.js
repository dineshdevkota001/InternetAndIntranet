var express = require('express');
var router = express.Router();
const {getfromCondition, postResource , deleteResource} = require('../../database/databaseapi')
const Type = 'Mesh'
const type = Type.toLowerCase()

const multer = require('multer')
const { withAuth } = require('../../authentication')

const {upload, deleteFile} = require('../../multer')

router.get('/', withAuth, (req, res) => {
     
    getfromCondition(type, { userid: req.userid }).then(databaseResponse => {
        console.log(databaseResponse)
        res.status(200).send(databaseResponse)
    }).catch((error) => {
        console.log(error)
    })
})

router.post('/post', withAuth, (req, res) => {
    upload[type](req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        let topost = { name: req.file.originalname.split('.').slice(0, -1).join('.') }
        topost.filename = req.file.filename
        topost.userid = req.userid
        postResource(type, topost).then(
            result => {
                req.file.listData = result[0]
                res.status(200).send(req.file)
            }
        )
    })
})

router.put('/:id', withAuth, (req, res) => {
    console.log(res.body)
    res.send('A put request')
})

router.delete('/:id', withAuth, (req, res) => {
    let { id } = req.params
    getResource(type, id).then(filename => {
        console.log(Type + '/'+ filename)
        deleteFile(Type + '/'+ filename)
        deleteResource(type, id).then(
            result => { return res.send(result) }
        ).catch(err=> {console.log('Image delete ',err)})
    }).catch(err=> {console.log('Image get',err)})
})

module.exports = router;