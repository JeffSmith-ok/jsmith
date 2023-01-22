import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <Image src="/logo.png" width={50} height={60} alt="Logo" />
        <b>jsmith@lexsmith.finance</b>
      </div>
      <Link href="/">Home</Link>
      <Link target="_blank" href="https://github.com/JeffSmith-ok">
        Github
      </Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
