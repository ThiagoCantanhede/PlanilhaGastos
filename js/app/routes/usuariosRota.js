const express = require('express')
const Login = require('../db/usuarios')

const router = new express.Router()

router.post('/usuarios', async (req, res) => {

    const usuario = new Login(req.body)
    try {    
        await usuario.save()
        res.status(201).send(usuario)        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await Login.find({})
        res.status(200).send(usuarios)
    } catch (error) {
         res.status(500).send()
    }
 })

 router.get('/usuarios/:id', async (req, res) => {
    const _id = req.params.id
    
    try {
        const usuario = await Login.find({'email': _id})    
        if(!usuario){
            return res.status(404).send()
        }
        res.send(usuario)
    } catch (error) {
        res.status(500).send()
    }
}) 

module.exports = router