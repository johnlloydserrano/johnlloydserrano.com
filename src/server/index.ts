//DOCS: https://fastify.dev/docs/latest/Reference/TypeScript/
import fastify from 'fastify';
import authRoutes from './routes/authRoutes';

const server = fastify();

server.get('/ping', async () => {
  return 'pong\n';
});

server.register(authRoutes, { prefix: '/auth' });

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
