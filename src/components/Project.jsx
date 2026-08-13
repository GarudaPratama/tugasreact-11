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

    const isPenuh = keranjang >= 10

    const tambahKeranjang = (e) => {
        e.preventDefault();
        setKeranjang((prev) => prev + 1)
        
    };

    const kurangKeranjang = (e) => {
        e.preventDefault();
        setKeranjang((prev) => prev - 1)
    };

    useEffect(() => {
        if (keranjang > 10) {
        toast.add({
            title: "Keranjang Penuh",
            description: "Keranjang sudah penuh (Maksimal 10)",
        });
        } else {
        toast.add({
            title: "Keranjang",
            description: `${namaBarang} dimasukkan kedalam keranjang (${keranjang})`,
        });
        }
  }, [keranjang]);

  return (
    <section className="flex min-h-screen justify-center align-center items-center">
        <Card className="flex w-100 align-center p-0">
            <div className="relative aspect-video w-full overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black/35" />
                <img
                    src="https://avatar.vercel.sh/shadcn1"
                    alt="Event cover"
                    className="h-full w-full object-cover grayscale dark:brightness-40"
                />
            </div>
            <CardHeader className="gap-8">
                <CardTitle>{namaBarang}</CardTitle>
                <CardDescription className="-mb-(--card-spacing)">
                    <div className="-mx-(--card-spacing) w-96 max-h-48 space-y-4 overflow-y-scroll border-t bg-muted/50 px-(--card-spacing) py-4 text-sm leading-relaxed">{deskripsi}</div>
                </CardDescription>
                <CardAction className="-ml-100">
                    <Button variant="outline" onClick={tambahKeranjang}>Tambah Keranjang</Button>
                </CardAction>
            </CardHeader>
            <CardContent className="mt-8">
                <p>{harga}</p>
            </CardContent>
            <CardFooter>
                <p>Slice-Commerce</p>
            </CardFooter>
        </Card>


    </section>
    
  )
}

export default Project;