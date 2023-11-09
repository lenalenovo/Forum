const connection = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function listUsers(request, response) {
    connection.query('SELECT * FROM users', (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de usuários.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storeUser(request, response) {
    const query = 'INSERT INTO users(name,email,password) values(?,?,?);';


    const params = Array(
        request.body.name,
        request.body.email,
        bcrypt.hashSync(request.body.password, 10)
    );


    connection.query(query, params, (err, results) => {
        if (results) {
            const query = "SELECT * FROM users WHERE `email` = ?";

            const params = Array(
                request.body.email
            );

            connection.query(query, params, (err, userResults) => {
                const userData = userResults[0];
                    const userId   = userData.id;
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Usuário cadastrado.`,
                        token: jwt.sign(
                            { userId },
                            'token',
                            { expiresIn: 300 }
                        ),
                        data: results
                    });
            })

        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

module.exports = {
    listUsers,
    storeUser
}