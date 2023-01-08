const config = {
  development: {
    API_URL: 'http://localhost:3000',
  },
  production: {
    API_URL: '',
  },
};

const env = process.env.NODE_ENV || 'development';

export default config[env].API_URL;
