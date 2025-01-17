import { defineConfig } from "vite";

export default defineConfig({
  define: {
    global: {},
  },
  resolve: {
    alias: {
      buffer: "buffer/",
    },
  },
});
