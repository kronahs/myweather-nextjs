import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <main>
        <footer className='fixed bottom-4  text-center'>
            <p>
                Data Provided by <Link href="https://openweathermap.org/">OpenWeather</Link> API
            </p>
        </footer>
    </main>
  )
}
