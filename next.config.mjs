import withPWA from 'next-pwa'

const prod = process.env.NEXT_PUBLIC_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
   ...withPWA({
  disable: !prod,
  dest: 'public',
  register: true,
  skipWaiting: true
})
}

export default nextConfig