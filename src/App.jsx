import React from 'react'
import Project from './components/Project.jsx'
import { Toaster } from "@/components/ui/toast"

function App() {
  return (
    <section className="flex min-h-screen justify-center align-center items-center gap-10">
      <Toaster />
      <Project namaBarang="Asus TUF Gaming A15" harga="Rp10.999.000" deskripsi="Laptop gaming tangguh berstandar militer (MIL-STD-810H) yang dibekali prosesor AMD Ryzen 7/9 seri tinggi dan kartu grafis NVIDIA GeForce RTX 40-Series. Memiliki layar 15,6 inci FHD/QHD dengan refresh rate hingga 144Hz/165Hz untuk visual gameplay yang mulus, didukung sistem pendingin Arc Flow Fans, serta opsi memori/penyimpanan yang mudah diuji atau di-upgrade."/>
      <Project namaBarang="Iphone 17 Pro Max (256 GB)" harga="Rp35.999.000" deskripsi="Flagship premium Apple yang ditenagai chipset A19 Pro berarsitektur canggih untuk performa ekstrim dan pemrosesan AI lokal. Dilengkapi layar Super Retina XDR OLED 6,9 inci ProMotion 120Hz dengan material bodi titanium tangguh, sistem kamera belakang triple 48MP dengan perbesaran optik tingkat tinggi, daya tahan baterai terbaik di kelasnya, serta kapasitas penyimpanan super besar 1TB."/>
      <Project namaBarang="Samsung S25 (12GB/1TB)" harga="Rp28.999.000" deskripsi="Smartphone flagship ringkas nan bertenaga yang mengusung Snapdragon 8 Gen 4 (atau Exynos 2500), dipadukan dengan RAM 12GB dan penyimpanan internal 1TB. Memiliki layar Dynamic AMOLED 2X 6,2 inci FHD+ 120Hz yang sangat cerah, sistem kamera flagship dengan dukungan fitur kecerdasan buatan Galaxy AI tingkat lanjut, serta desain bodi kaca-aluminium kelas atas."/>
    </section>
    
  )
}

export default App