const express = require('express');
const router = express()
const fs = require('fs')

const pathRouter = `${__dirname}`

const removeExtension = (filename) => {
    return filename.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
    const fileWileOutExt = removeExtension(file)
    const skip = ['index'].includes(fileWileOutExt)

    if (!skip) {
        router.use(`/${fileWileOutExt}`, require(`./${fileWileOutExt}`))
        console.log('CARGA DE RUTAS', fileWileOutExt)
    }
})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'No found' })
})

module.exports = router