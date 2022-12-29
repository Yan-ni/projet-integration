const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const slowDown = require('express-slow-down');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const { sequelize } = require('./src/models');

const app = express();

// load environement variables
require('dotenv').config();

// For Nginx
app.enable('trust proxy');

/* _________________________________ middlewares __________________________________ */
// IP rate-limiting that slows down responses,
// rather than blocking the user
app.use(
  slowDown({
    windowMs: 60 * 1000, // 1 minutes
    delayAfter: 30, // allow 30 requests per 1 minutes, then...
    delayMs: 500, // begin adding 500ms of delay per request
  })
);
// helps secure the API with various HTTP headers
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data: blob:'],
    },
  })
);
// enable all cross origin requests
app.use(cors());
// HTTP request logger
app.use(morgan('common'));
// parses incoming requests with JSON
app.use(express.json());

/* ____________________________________ routes ____________________________________ */
// API documentation route
const swaggerConfig = require('./src/config/swagger');

const swaggerDocs = swaggerJsDoc(swaggerConfig);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// API routes
const routes = require('./src/routes');

app.use('/api', routes);

// view routes
if (process.env.NODE_ENV === 'production') {
  const dist_path = path.resolve(__dirname, '..', 'client', 'dist');

  app.use(express.static(dist_path));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dist_path, 'index.html'));
  });
}

/* _________________________________ start server _________________________________ */
const PORT = process.env.PORT || 3000;

// sequelize.sync({ force: false }).then(() => {
sequelize.authenticate().then(() => {
  app.listen(PORT, () => console.log(`app running on port : ${PORT}`));
});
// });
