import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.resolve(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.resolve(__dirname, '..', 'public')));

server.use(mainRoutes);

// Could not find any route, then 404 page.
server.use((req, res) => {
	res.send('404');
});

server.listen(process.env.PORT, () => {
	console.log(`Server currently running on port ${process.env.PORT}`);
});
