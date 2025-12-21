import express, { type Express, Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // Serve static files (JS, CSS, images, etc.)
  app.use(express.static(distPath, {
    // Don't send 404 for missing files, let it fall through
    fallthrough: true,
  }));

  // Catch-all handler: serve index.html for all non-API routes
  // This allows client-side routing to work
  app.get("*", (req: Request, res: Response, next: NextFunction) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return next();
    }
    
    // For all other routes, serve index.html
    res.sendFile(path.resolve(distPath, "index.html"), (err) => {
      if (err) {
        next(err);
      }
    });
  });
}
