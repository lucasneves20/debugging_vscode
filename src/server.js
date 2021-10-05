import express from 'express'
import getUsers, { addUsers } from './repository/UserRepository.js'

const app = express()

app.get('/', (req, res) => {
    const users = getUsers()

    return res.json({ users })
})

app.listen(3333, () => {
    console.log('o servidor está rodando normalmente ...')
})

// Deus me ajude !!!!