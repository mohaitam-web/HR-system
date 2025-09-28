import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), 
    },
  },
});

//docker compose cp frontend:/app/package.json ./frontend/package.json

//docker compose cp frontend:/app/package-lock.json ./frontend/package-lock.json

// figma link:
//https://www.figma.com/design/EwVryDR7hpYxaBHj4PfGJ4/HRMS-Human-Resource-management-system---Employee-mnagement-System----HIgh-fidelity--Community-?node-id=0-1&p=f&t=yy07LOJKSqLh7EhY-0