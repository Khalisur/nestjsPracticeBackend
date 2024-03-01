// config.ts
const renderDBUrl =
  'postgres://blog_backend_izsx_user:pVOTXn1zRW0eKjRX0AyyfjPlDzIx4hB0@dpg-cngq36f79t8c73ac3na0-a.oregon-postgres.render.com/blog_backend_izsx';

const parseDbUrl = (url: string) => {
  const parsedUrl = new URL(url);
  return {
    user: parsedUrl.username,
    password: parsedUrl.password,
    host: parsedUrl.hostname,
    port: parseInt(parsedUrl.port),
    database: parsedUrl.pathname.substring(1),
  };
};

export default {
  database: parseDbUrl(renderDBUrl),
};
