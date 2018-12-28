import Link from 'next/link'

export default () => (
  <nav>
    <Link href='/'>
      <a>Varjupaik</a>
    </Link>

    <Link href='/meist'>
      <a>Meist</a>
    </Link>
    <Link href='/teenused'>
      <a>Teenused</a>
    </Link>
    <Link href='/galerii'>
      <a>Galerii</a>
    </Link>
    <Link href='/kontakt'>
      <a>Kontakt</a>
    </Link>
  </nav>
)
