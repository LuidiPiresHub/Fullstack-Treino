import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const port = 3001;

app.get('/', (_request, response) => response.status(200).json('Hello word'));

// ESTA ROTA VAI RETONAR UMA LISTA DE USUARIOS

app.get('/users', (_request, response) => {
  const usuarios = ['Laura', 'Luídi', 'Ewerton', 'Crysthian', 'Juliana', 'João'];
  // const usuarios = [];
  if (usuarios.length === 0) {
    return response.status(404).json('Users not found');
  }
  return response.status(200).json(usuarios); 
});

app.listen(port, () => console.log(`App is runing on port ${port}`));
