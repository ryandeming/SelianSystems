import { readFile, writeFile, mkdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

// Routes to generate static HTML files for
const routes = [
  "/",
  "/pricing",
  "/about",
  "/how-it-works",
  "/review",
  "/privacy",
  "/terms",
];

export async function prerender() {
  const distPath = path.resolve(process.cwd(), "dist/public");
  const indexPath = path.join(distPath, "index.html");

  if (!existsSync(indexPath)) {
    throw new Error(`index.html not found at ${indexPath}. Run vite build first.`);
  }

  const template = await readFile(indexPath, "utf-8");

  console.log("Generating static HTML files for routes...");

  for (const route of routes) {
    try {
      // Determine output path
      let outputPath: string;
      if (route === "/") {
        // Root already exists, skip
        continue;
      } else {
        const routeDir = path.join(distPath, route);
        await mkdir(routeDir, { recursive: true });
        outputPath = path.join(routeDir, "index.html");
      }

      // Copy the index.html template to the route directory
      // The client-side router will handle the routing
      await writeFile(outputPath, template, "utf-8");
      console.log(`✓ Generated ${route}/index.html`);
    } catch (error) {
      console.error(`✗ Failed to generate ${route}:`, error);
    }
  }

  console.log("Static HTML generation complete!");
}

