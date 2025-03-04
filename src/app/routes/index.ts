import { Router } from "express";
import CountriesRoutes from "./countries.routes";

export default function registerRoutes (app: Router) {
  app.use ('/countries', CountriesRoutes);
}
