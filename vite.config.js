import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "out",
    lib: {
      entry: "./app.ts",
      name: "app",
      fileName: "app.bundle",
      formats: ["es"]
    }
  }
});
