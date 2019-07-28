import express from 'express'

const app = express ()

const start = () => {
  app.get('/', (req, res) => {
    res.send('Hello world!')
  })
  app.listen(3000, (error) => {
    if (error) {
      console.log('error opening app')
      return
    }
    console.log('App running on port 3000')
  })
}

exports.sum = (valOne, valTwo) => {
  return valOne + valTwo
}

start()
