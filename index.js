import express from 'express';

const app = express();

app.use(express.json());

const usuarios = [
  { nombre: 'Juan', apellido: 'Perez' },
  { nombre: 'Pedro', apellido: 'Solis', edad: 32 },
];

app.get('/api/usuarios', (req, res) => {
  //Consulta a la base de datos
  res.send(usuarios);
});

app.get('/api/usuarios/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const queryParams = req.query;

  const usuario = usuarios.find(
    (u) =>
      u.nombre == nombre &&
      u.apellido == queryParams.apellido &&
      u.edad === Number(queryParams.edad),
  );

  if (usuario) res.send(usuario);

  res.send('Usuario no encontrado');
});

app.delete('/api/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Usuario con id ${id} eliminado correctamente`);
});

app.put('/api/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  let usuario = usuarios.find((u) => u.nombre == nombre);
  if (!usuario) res.send('Usuario no encontrado');

  const usuarioEditado = req.body;
  usuario = Object.assign(usuario, usuarioEditado);
  res.send(`Modificar correctamente: ${JSON.stringify(usuario)}`);
});

app.patch('/api', (req, res) => {
  res.send('Modificación parcial correctamente');
});

app.post('/api', (req, res) => {
  const usuario = req.body;
  console.log(usuario);

  usuarios.push(usuario);
  res.send(`Insert correctamente ${JSON.stringify(usuarios)}`);
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
