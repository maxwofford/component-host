const express = require('express')
const app = express()
const cors = require('cors')

const fs = require('fs')
const path = require('path')

app.use(cors())

const listener = app.listen(3000, () => {
  console.log('App is running on port', listener.address().port)
})

app.get('/components.js', async (req, res) => {
  const source = path.resolve(__dirname, 'public')
  const directories = fs.readdirSync(source).filter(dir => {
    try {
      const isDir = fs.statSync(path.resolve(__dirname, 'public', dir)).isDirectory()
      const hasJs = fs.statSync(path.resolve(__dirname, 'public', dir, 'main.js'))
      return isDir && hasJs
    } catch (e) {
      // skip...
      return false
    }
  })
  const importString = directories.map(dir => {
    return `
// See a demo of the '${dir}' component at https://component-host.maxwofford.repl.co/${dir}
import 'https://component-host.maxwofford.repl.co/${dir}/main.js'
    `
  }).join('\n\n')
  res.setHeader('Content-Type', 'application/javascript')
  res.send(importString)
})

app.get('/', async (req, res) => {
  // return res.send('success')
  const source = path.resolve(__dirname, 'public')
  const directories = fs.readdirSync(source).filter(dir => {
    try {
      const isDir = fs.statSync(path.resolve(__dirname, 'public', dir)).isDirectory()
      const hasDemo = fs.statSync(path.resolve(__dirname, 'public', dir, 'index.html'))
      return isDir && hasDemo
    } catch (e) {
      // skip...
      return false
    }
  })
  const views = directories.map(dir => {
    return `
    <h2>${dir}</h2>
    <iframe src="/${dir}"></iframe>
    `
  }).join('\n\n')
  const demoTemplate = `${views}`
  res.send(demoTemplate)

})

app.use(express.static('public'))