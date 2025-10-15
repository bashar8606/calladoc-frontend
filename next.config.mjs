/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: `
      default-src 'self' http: https: data: blob: 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''};
      connect-src 'self' https://tawk.to https://*.tawk.to https://*.twkwidget.com wss://tawk.to wss://*.tawk.to wss://*.twkwidget.com;
    `.replace(/\s{2,}/g, ' ').trim(),
  },
];


const nextConfig = {
    // async headers() {
    //   return [
    //     {
    //       source: '/(.*)',
    //       headers: [
    //         {
    //           key: 'Content-Security-Policy',
    //           value: `
    //             script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net;
    //             img-src 'self' 
    //               https://embed.tawk.to 
    //               https://*.tawk.to 
    //               https://cdn.jsdelivr.net 
    //               https://admin.calladoc.ae 
    //               https://admin.calladoc.ae/api/service-categories
    //               https://40.172.190.110:1337
    //               data: blob:;
    //             font-src 'self' 
    //               https://embed.tawk.to 
    //               https://*.tawk.to 
    //               https://*.tawkto.net 
    //               data:;
    //             connect-src 'self' 
    //               https://*.tawk.to 
    //               https://*.tawkto.net 
    //               wss://*.tawk.to 
    //               wss://*.tawkto.net;
    //             style-src 'self' 'unsafe-inline' 
    //               https://embed.tawk.to 
    //               https://*.tawk.to;
    //           `.replace(/\s+/g, ' ').trim()
    //         }
    //       ]
    //     }
    //   ]
    // },
    
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