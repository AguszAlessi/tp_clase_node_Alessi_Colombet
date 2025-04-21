import express from 'express';

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
    res.send("Bienvenido a mi servidor");
});

app.get('/saludo', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.get('/numero', (req, res) => { 
    console.log("42");
    res.send('42');
});

const usuario = { "nombre": "Ana", "edad": 25 } 
app.get('/usuario', (req, res) => { 
    res.json(usuario);
});

const productos =  [ "Mouse", "Teclado", "Monitor" ] 
app.get('/productos', (req, res) => { 
    res.json(productos);
});

const materias  = [ { "nombre": "Matemática" }, { "nombre": "Lengua" } ] 
app.get('/materias', (req, res) => { 
    res.json(materias );
});

const personas = [
    { "nombre": "Ana", "edad": 25 },
    { "nombre": "Peru", "edad": 30 }
];
app.get('/mostrarPersonas', (req, res) => 
{
    res.json(personas)
}); 

app.post('/agregarPersonas', (req,res) =>
{
    let {nombre, edad} = req.body
    if(nombre != string || isNaN(edad))
    {
        res.status(404).json({ error: 'datos no validos'});
    }else{
        personas.push(nombre, edad)
        res.status(201).json("persona agregada correctamente")
    }
})

app.delete('/eliminarPersona/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }else{
        const eliminado = personas.splice(indice, 1);
        res.json(personas);
    }
})
app.listen(port);