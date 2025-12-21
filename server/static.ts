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

  // Route handler: check for pre-rendered HTML files first, then fall back to index.html
  app.get("*", (req: Request, res: Response, next: NextFunction) => {
    // Skip API routes
    if (req.path.startsWith("/api")) {
      return next();
    }

    // Check if there's a pre-rendered HTML file for this route
    // e.g., /pricing -> dist/public/pricing/index.html
    let htmlPath: string;
    if (req.path === "/") {
      htmlPath = path.join(distPath, "index.html");
    } else {
      // Try route-specific directory first
      const routeHtmlPath = path.join(distPath, req.path, "index.html");
      if (fs.existsSync(routeHtmlPath)) {
        htmlPath = routeHtmlPath;
      } else {
        // Fall back to root index.html for client-side routing
        htmlPath = path.join(distPath, "index.html");
      }
    }

    res.sendFile(htmlPath, (err) => {
      if (err) {
        next(err);
      }
    });
  });
}
