import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
 plugins: [react()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
   "@components": path.resolve(__dirname, ".src/components"),
   "@assets": path.resolve(__dirname, ".src/assets"),
   "@pages": path.resolve(__dirname, ".src/pages"),
   "@styles": path.resolve(__dirname, ".src/styles"),
   "@utils": path.resolve(__dirname, ".src/utils"),
   "@hooks": path.resolve(__dirname, ".src/hooks"),
   "@contexts": path.resolve(__dirname, ".src/contexts"),
   "@services": path.resolve(__dirname, ".src/services"),
   "@types": path.resolve(__dirname, ".src/types"),
   "@store": path.resolve(__dirname, ".src/store"),
   "@config": path.resolve(__dirname, ".src/config"),
   "@api": path.resolve(__dirname, ".src/api"),
   "@constants": path.resolve(__dirname, ".src/constants"),
   "@mocks": path.resolve(__dirname, ".src/mocks"),
   "@tests": path.resolve(__dirname, ".src/tests"),
   "@routes": path.resolve(__dirname, ".src/routes"),
   "@layouts": path.resolve(__dirname, ".src/layouts"),
  },
 },
})
