/** @type {import('next').NextConfig} */
const securityHeaders = [
    {
      key: "Content-Security-Policy",
      value: `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://embed.tawk.to https://*.tawk.to;
        connect-src 'self' https://embed.tawk.to wss://embed.tawk.to https://va.tawk.to https://*.tawk.to;
        style-src 'self' 'unsafe-inline';
        img-src 'self' data: blob: https:;
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
  