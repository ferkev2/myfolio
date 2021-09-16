/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'daisyui.com', 'public.assets', 'www.w3.org'],
  },
  target: serverless
}
