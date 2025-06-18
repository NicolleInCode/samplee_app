const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'admin' && password === 'admin123') {
        res.redirect('/dashboard');
    } else {
        res.status(401).send(`
            <h1>Credenciales inválidas</h1>
            <p><a href="/login">Volver al login</a></p>
        `);
    }
});

app.get('/dashboard', (req, res) => {
    res.send(`
        <h1>¡Bienvenido al Dashboard!</h1>
        <p>Login exitoso para usuario: admin</p>
        <p><a href="/login">Cerrar sesión</a></p>
    `);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
});