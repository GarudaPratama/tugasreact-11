import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { useEffect } from 'react'
import { useState } from 'react'

function Project({ namaBarang, harga, deskripsi }) {

    const [keranjang, setKeranjang] = useState(0);
    
    const [statusAksi, setStatusAksi] = useState(null);

    const isPenuh = keranjang >= 10

    const tambahKeranjang = () => {
        if (keranjang >= 10) return
        setKeranjang((prev) => prev + 1)
        setStatusAksi("tambah")
    };

    const kurangKeranjang = () => {
        if (keranjang <= 0) return
        setKeranjang((prev) => prev - 1)
        setStatusAksi("kurang")
    };

    useEffect(() => {

    if (statusAksi === null) return;
    
    if (keranjang >= 10) {
      toast.add({
        title: "Keranjang Penuh",
        description: `${namaBarang} tidak dapat dimasukkan ke dalam keranjang (pembelian barang ini max. 10 items)`,
        
      });
    } else if (keranjang === 0) {
      toast.add({
        title: "Keranjang Kosong",
        description: `${namaBarang} telah dihapus dari keranjang`,
        
      });
    } else if (statusAksi === "tambah") {
        toast.add({
        title: "Keranjang",
        description: `${namaBarang} dimasukkan ke dalam keranjang (${keranjang})`,
        
      });
    } else if (statusAksi === "kurang") {
        toast.add({
        title: "Keranjang",
        description: `${namaBarang} dikeluarkan dari dalam keranjang (${keranjang})`,
        
      });
    }
      
    
  }, [keranjang, statusAksi]);

  return (
    <section className="relative flex flex-col min-h-screen justify-center align-center items-center">
        <Card className="flex w-100 align-center p-0">
            <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/35" />
                <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="h-full w-full object-cover grayscale dark:brightness-40"
                />
            </div>
            <CardHeader className="gap-8 flex flex-col">
                <CardTitle>{namaBarang}</CardTitle>
                
                <CardAction className="flex gap-4">
                    <Button variant="outline" onClick={tambahKeranjang}>Tambah Keranjang</Button>
                    <Button variant="outline" onClick={kurangKeranjang}>Kurang Keranjang</Button>
                </CardAction>
            </CardHeader>
            <CardDescription className="-mb-(--card-spacing)">
                <div className="w-96 max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">{deskripsi}</div>
            </CardDescription>
            <CardContent className="mt-8">
                <p>{harga}</p>
            </CardContent>
            <CardFooter>
                <p>Slice-Commerce</p>
            </CardFooter>
        </Card>

        {isPenuh && <p className="absolute bottom-10 text-red-500 text-center mt-8">Pembelian maximum 10 Unit per Akun</p>}
    </section>
    
  )
}

export default Project;