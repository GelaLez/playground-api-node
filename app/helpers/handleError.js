const httpError = (req, err) => {
    console.log(err)
    res.status(500)
    res.send({ err: 'algo ocurrio' })
}

module.exports = { httpError }