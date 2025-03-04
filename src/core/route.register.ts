import { Router } from 'express';
import path from 'path';
import fs from 'fs';

export default function registerRoutes(app: Router) {
  const routesFolder = path.join(__dirname, '../api/routes');

  fs.readdirSync(routesFolder).forEach((file) => {

    if (file.endsWith('.routes.ts')) {
      const route = require(path.join(routesFolder, file)).default;
      const routePath = `/${file.replace('.routes.ts', '')}`;
      app.use(routePath, route);
    }
  });
}
