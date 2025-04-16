export default () => ({
    port: parseInt(process.env.PORT || '4000', 10),
    database: {
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10)
    }
  });