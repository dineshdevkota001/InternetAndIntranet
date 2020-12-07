var express = require('express');
var router = express.Router();
const {getfromCondition, postResource , deleteResource} = require('../../database/databaseapi')
const Type = 'Mesh'
const type = Type.toLowerCase()

const multer = require('multer')
const {withAuth} = require('../../authentication')

let upload = require('../../multer')[type]
router.get('/',(req,res)=>{
    return false
})

router.get('/', withAuth, (req,res)=>{
    try{
        getfromCondition(type,{name:req.params.name}).then(result=>{
            console.log(result[0])
            if (result[0]) filename = result[0].filename;
            else filename = 'default.jpg'
            return res.send(filename)
        })
    }
    catch(error){
        console.log(error)
    }
})

router.post('/post', withAuth ,(req,res)=>{
    upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log('enter 1', err)
                return res.status(500).json(err)
            } else if (err) {
                console.log(' enter 2' ,err)
                return res.status(500).json(err)
            }
        let topost = {name: req.file.originalname.split('.').slice(0,-1).join('.')}
        topost.filename = req.file.filename
        console.log(topost)
        postResource(type, topost).then(
            result => res.status(200).send(req.file)
        )
    })

})

router.put('/:id', withAuth, (req,res)=>{
    console.log(res.body)
    res.send('A put request')
})

router.delete('/:id', withAuth, (req,res)=>{
    let {id} = req.params
    deleteResource(type, id).then(
        result => {return res.send('Deleted this resource')}
    )
})

module.exports = router;