const express = require('express')
const Conta = require('../db/contas_a_pagar')

const router = new express.Router()

router.post('/contas_a_pagar', async (req, res) => {
    const despesa = new Conta(req.body)
    try {
        await despesa.save()
        res.status(201).send(despesa)        
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/contas_a_pagar', async (req, res) => {
    try {
        const despesa = await Conta.find({})
        res.status(200).send(despesa)
    } catch (error) {
         res.status(500).send()
    }
 })

 
 router.get('/contas_a_pagar/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const despesa = await Conta.find({'usuario': _id})     
        if(!despesa){
  
            return res.status(404).send()
        }
        res.send(despesa)
   
    } catch (error) {
        res.status(500).send()
    }
})

router.delete('/contas_a_pagar/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const despesa = await Conta.findByIdAndDelete(_id)
        
        if(!despesa){
            return res.status(404).send()
        }
        res.send(despesa)
    } catch (error) {
        res.status(500).send()
    }
})


module.exports = router