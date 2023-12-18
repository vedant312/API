import express from 'express';
import helmet from 'helmet';
import { rateLimit } from 'express-rate-limit';
import compression from 'express-compression';

import mainRoute from './main.routes';
import userRoutes from './user.routes';

const app = express();
const port = 4000;
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  limit: 12, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
});

app.use(compression())
app.use(limiter);
app.use(express.json());
app.use(helmet());

app.get('/v1', mainRoute);
app.use('/v1/user', userRoutes);

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
