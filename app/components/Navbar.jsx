import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Image src="/app-logo.png"
        
        alt="weather-logo"
        width={70}
        height={70}
        quality={100}
      />
      <h2 className="primary-color">MyWeather</h2>
      <Link href='/'>Home</Link>
      <Link href='/about'>About</Link>
    </nav>
  )
}
