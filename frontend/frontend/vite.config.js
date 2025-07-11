import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv"
dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
server:{
  proxy:{
    "/signup":{
      target:process.env.VITE_PROXY_URL,
      changeOrigin:true,
      secure:false,
    }
  }
}
})
  
