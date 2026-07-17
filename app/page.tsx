import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Button variant={'default'}>Default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>Ghost</Button>
      <Button variant={'outline'}>Outline</Button>
      <Button variant={'secondary'}>Secondary</Button>
    </div>
  )
}
