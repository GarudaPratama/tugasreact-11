import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "./ui/button"


export default function KeranjangProject() {

    const kurangKeranjang = () => {
        setKeranjang((prev) => prev - 1)
    };

  return (
    <>
      <Drawer swipeDirection="right">
        <DrawerTrigger render={<Button variant="outline" />} className="px-8 py-5">Buka Keranjang</DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
            <DrawerTitle className="font-bold text-2xl mb-4">Keranjang Pembelian</DrawerTitle>
            <DrawerDescription className='text-xs'>Barang yang kamu masukkan dikeranjang ada Disini!</DrawerDescription>
            </DrawerHeader>
            <div className="p-4">
                <Card className='flex'>
                    <CardTitle>Misalnya ini barang</CardTitle>
                    <div className='flex items-center'>
                        <Button className='w-10'>-</Button>
                        <span>0</span>
                        <Button className='w-10'>+</Button>
                    </div>
                </Card>
            </div>
            <DrawerFooter>
            <Button>Lanjutkan Pembelian</Button>
            <DrawerClose render={<Button variant="outline" />}>Cancel</DrawerClose>
            </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}