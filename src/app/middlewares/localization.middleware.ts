import {Request, Response, NextFunction } from "express";
import { Language } from "../../types/enums/language.enum";

const localizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const language = req.headers['x-localization'] as Language;
    if (language) {
        req.language = language;
    } else {
        req.language = Language.English;
    }

    next();
}

export default localizationMiddleware
