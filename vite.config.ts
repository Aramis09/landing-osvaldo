import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { compression } from 'vite-plugin-compression2';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), compression({

    include: /\.(jpg|png|txt|js|jsx|ts|tsx|scss|css|json|html|ico|svg)$/i, // Archivos a comprimir
    exclude: [], // Archivos para excluir de la compresión
    threshold: 10240, // Tamaño mínimo del archivo para ser comprimido (en bytes)
    algorithm: 'gzip', // Algoritmo de compresión (puede ser 'gzip' o 'brotliCompress')
    compressionOptions: {}, // Opciones de compresión (puedes dejarlo vacío)

  })],

})
