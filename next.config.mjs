/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/(.*)", // all routes
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             default-src 'self' https: data: blob: 'unsafe-inline';

  //             script-src 
  //               'self' 
  //               'unsafe-inline' 
  //               'unsafe-eval' 
  //               https://embed.tawk.to 
  //               https://*.tawk.to 
  //               https://admin.calladoc.ae;

  //             connect-src 
  //               'self' 
  //               http: 
  //               https: 
  //               wss://*.tawk.to 
  //               https://*.tawk.to 
  //               https://admin.calladoc.ae;

  //             frame-src 
  //               'self' 
  //               https://embed.tawk.to 
  //               https://*.tawk.to 
  //               https://admin.calladoc.ae;

  //             img-src 
  //               'self' 
  //               data: 
  //               https:;

  //             style-src 
  //               'self' 
  //               'unsafe-inline' 
  //               https:;

  //             font-src 
  //               'self' 
  //               https:;
  //           `.replace(/\s{2,}/g, " "),
  //         },
  //       ],
  //     },
  //   ];
  // },
  
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self' http: https: data: blob: 'unsafe-inline'; connect-src 'self' http: https: data: blob: wss://tawk.to wss://*.tawk.to https://tawk.to https://*.tawk.to",
          },
        ],
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
      {
        protocol: "https",
        hostname: "embed.tawk.to",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
      }
    ],
    formats: ["image/webp"],
  },
};

export default nextConfig;