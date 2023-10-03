/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['openweathermap.org']
    },
    eslint:{
        ignoreDuringBuilds: true,
    },
    env: {
        NEXT_PUBLIC_OPENWEATHER_API_KEY: process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY
    }
}

module.exports = nextConfig
