
const swaggerJSDoc = require('swagger-jsdoc');
const fs = require('fs');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Chat-UI API',
      version: '1.0.0',
      description: 'API documentation for Chat-UI',
    },
  },
  apis: ['./src/lib/server/*.ts'], // Path to your API files
};

const swaggerSpec = swaggerJSDoc(options);

fs.writeFileSync('./static/swagger.json', JSON.stringify(swaggerSpec, null, 2));
