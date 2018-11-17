const mongoose = require('mongoose')

const connect = () =>  new Promise((resolve, reject) => {
    mongoose.connect('mongodb://fondapiDan:Petunia-1923@ds159737.mlab.com:59737/fondapi', {
      useNewUrlParser: true 
    })
    const db = mongoose.connection

    db.on('open', () => {
      console.warn('connection open')
      resolve(mongoose)
    })

    db.on('error', (error) => {
      console.error('NO SE PUDO CONECTAR: ', error)
      reject(error)
    })
  })

module.exports = { connect }