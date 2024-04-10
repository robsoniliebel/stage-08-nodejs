// Aqui vamos importar o caminho que criamoos de rotas, para isso vamos importar da biblioteca do Express, usando
const { Router } = require("express");

const usersRoutes = Router();

// Aqui removemos a rota do server.js e transferimos para o sistema de Rotas aqui
// para isso temos que importar o caminho acima
usersRoutes.post("/", (request, response) => {
    const { name, email, password } = request.body;
 
     // response.send(`Usuário: ${name}. - E-mail: ${email}. e a senha ${password} `);
 
     // Aqui vamos usar o metodo json para atualizar nossos dados
     response.json({ name, email, password })
 });

//  aqui vamos exportar o comando para quem estiver usando, quando a gente faz um importação e estamos exportando pelos outros
 module.exports = usersRoutes;
