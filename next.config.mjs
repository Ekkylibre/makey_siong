/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      styledComponents: true, // Assure-toi que cette option est activée si nécessaire
    },
  };
  
  export default nextConfig;
  