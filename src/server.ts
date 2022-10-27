import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

// EJS configuration
server.set('views', path.resolve(__dirname, 'views'));
server.set('view engine', 'ejs');

// Static folder called public, and main routes
server.use(express.static(path.resolve(__dirname, '..', 'public')));
server.use(mainRoutes);

// Could not find any route, then 404 page.
server.use((req, res) => {
	res.render('pages/404.ejs');
});

// Server runs on .env PORT variable
server.listen(process.env.PORT, () => {
	console.log(`Server currently running on port ${process.env.PORT}`);
});
