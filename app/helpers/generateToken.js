const jwt = require('jsonwebtoken')

const tokenSing = async (user) => {
    return jwt.sign(
        {
            _id: user.id,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2h'
        }
    )
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        return null
    }

}

const decodeSing = (token) => {
    return jwt.decode(token, null)
}

module.exports = {
    tokenSing,
    decodeSing,
    verifyToken
}