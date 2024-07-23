import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='bg-[url(/images/wallpaper.jpg)] overflow-y-auto bg-cover bg-center flex min-h-screen flex-col items-center justify-between font-[NothingSomething]'>
      <Link href='/content'>Button</Link>
    </main>
  )
}
