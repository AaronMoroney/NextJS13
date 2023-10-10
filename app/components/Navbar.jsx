import Image from "next/image"
import Link from "next/link"
import Logo from './dojo-logo.png'
export default function Navbar() {
  return (
    <div>
        <nav>
          <Image 
          src={Logo}
          alt="dojo logo"
          width={70}
          quality={100}
          />
          <Link href='/'>Dashboard</Link>
          <Link href='/tickets'>Tickets</Link>
          <Link href='/tickets/create'>Add ticket</Link>
        </nav>
    </div>
  )
}
