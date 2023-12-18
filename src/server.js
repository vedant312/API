import express from 'express';
import helmet from "helmet"; 

import mainRoute from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());

app.get('/v1',mainRoute);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
