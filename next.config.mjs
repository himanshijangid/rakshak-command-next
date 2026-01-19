/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.rakshakcommand.in",
          },
        ],
        destination: "https://rakshakcommand.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
