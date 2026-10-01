/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/journal", destination: "/actualites", permanent: true },
      { source: "/journal/:slug", destination: "/actualites", permanent: true },
      { source: "/processus", destination: "/#methode", permanent: true },
      { source: "/produits/:slug", destination: "/solutions", permanent: true },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
