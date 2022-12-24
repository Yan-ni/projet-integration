const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const { sequelize } = require('./models');

const app = express();

// middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('common'));

app.use((req, res, next) => {
  res.json({
    message: 'working',
  });
});

const PORT = process.env.PORT || 3000;

// sequelize.sync({ force: false }).then(() => {
sequelize.authenticate().then(() => {
  app.listen(PORT, () => console.log(`app running on port : ${PORT}`));
});
// });
