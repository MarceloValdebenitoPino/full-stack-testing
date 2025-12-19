const request = require('supertest');
test('Prueba API', async () => {
  const res = await request('https://jsonplaceholder.typicode.com').get('/posts/1');
  expect(res.statusCode).toBe(200);
});
