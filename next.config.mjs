/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
      key: "Content-Security-Policy",
      value: `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://embed.tawk.to;
        connect-src 'self' https://embed.tawk.to wss://embed.tawk.to https://your-api.com;
        style-src 'self' 'unsafe-inline' https://embed.tawk.to https://fonts.googleapis.com;
        style-src-elem 'self' 'unsafe-inline' https://embed.tawk.to https://fonts.googleapis.com;
        img-src 'self' data: blob: https:;
        font-src 'self' https://fonts.gstatic.com;
        frame-src https://embed.tawk.to;
      `.replace(/\s{2,}/g, " ").trim(),
    },
  ];
  
  const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "40.172.190.110",
          port: "1337",
        },
        {
          protocol: "https",
          hostname: "admin.calladoc.ae",
        },
        {
          protocol: "http",
          hostname: "127.0.0.1",
          port: "1337",
        },
      ],
      formats: ["image/webp"],
    },
  };
  
  export default nextConfig;
  