import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        works: resolve(__dirname, 'src/works.html'),
        about: resolve(__dirname, 'src/About.html'),
        sketchbook: resolve(__dirname, 'src/projectPages/Sketchbook.html'),
        biodiversite: resolve(__dirname, 'src/projectPages/Biodiversite.html'),
        citerouge: resolve(__dirname, 'src/projectPages/CiteRouge.html'),
        electro: resolve(__dirname, 'src/projectPages/concertElectro.html'),
        delamama: resolve(__dirname, 'src/projectPages/Delamama.html'),
        lettreaimee: resolve(__dirname, 'src/projectPages/lettreaimee.html'),
        memoire: resolve(__dirname, 'src/projectPages/memoire.html'),
        mouvement: resolve(__dirname, 'src/projectPages/mouvement.html'),
        naomi: resolve(__dirname, 'src/projectPages/Naomi.html'),
        piquante: resolve(__dirname, 'src/projectPages/Piquante.html'),
        ruchespop: resolve(__dirname, 'src/projectPages/Ruchespop.html'),
        sound: resolve(__dirname, 'src/projectPages/Soundfrequencies.html'),
      },
    },
  },
})