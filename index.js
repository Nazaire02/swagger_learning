const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");

const app = express();

const swaggerOptions={
    swaggerDefinition:{
        info:{
            'title':"My first api with swagger",
            'version':"1.0.0",
        }
    },
    apis:["index.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
//console.log(swaggerDocs);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs))


/**
 * @swagger
 * /books:
 *    get:
 *      description: get all books
 *      responses:
 *              200:
 *                description: Success
 */
app.get('/books', (req, res)=>{
    res.send([{'id':1, "label":"Ahoooo"}]);
});

/**
 * @swagger
 * /books:
 *    post:
 *      description: insert a book
 *      parameters:
 *            - name: title
 *              description: title of the book
 *              in: formData
 *              required: true
 *              type: string
 *      responses:
 *              201:
 *                description: added
 */
app.post('/books', (req, res)=>{
    res.status(201).send();
});

app.listen(3000, ()=>{console.log("on écoute sur le port 3000")})