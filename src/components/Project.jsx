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

function Project() {

    const [keranjang, setKeranjang] = useState(0);

    const tambahKeranjang = (e) => {
        e.preventDefault();
        
    };

    useEffect(() => {
        toast.add({
            title: "Count",
            description: keranjang,
        });
    }, [tambahKeranjang]);

  return (
    <section className="flex min-h-screen justify-center align-center items-center">
        <Card className="flex w-125 align-center">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>
                    <Button variant="outline" >Keranjang</Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    </section>
    
  )
}

export default Project;