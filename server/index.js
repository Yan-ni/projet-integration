const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const { sequelize } = require('./src/models');

const app = express();

// environement variables
require('dotenv').config();

// middlewares
app.use(helmet({ crossOriginEmbedderPolicy: false, originAgentCluster: true }));
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      'img-src': ["'self'", 'https: data: blob:'],
    },
  })
);
app.use(cors());
app.use(morgan('common'));

// api routes
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

// start server
const PORT = process.env.PORT || 3000;

// sequelize.sync({ force: false }).then(() => {
sequelize.authenticate().then(() => {
  app.listen(PORT, () => console.log(`app running on port : ${PORT}`));
});
// });
