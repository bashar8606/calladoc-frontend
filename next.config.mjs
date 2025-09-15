/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Content-Security-Policy',
              value: `
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net;
                img-src 'self' 
                  https://embed.tawk.to 
                  https://*.tawk.to 
                  https://cdn.jsdelivr.net 
                  https://admin.calladoc.ae 
                  https://40.172.190.110:1337
                  data: blob:;
                font-src 'self' 
                  https://embed.tawk.to 
                  https://*.tawk.to 
                  https://*.tawkto.net 
                  data:;
                connect-src 'self' 
                  https://*.tawk.to 
                  https://*.tawkto.net 
                  wss://*.tawk.to 
                  wss://*.tawkto.net;
                style-src 'self' 'unsafe-inline' 
                  https://embed.tawk.to 
                  https://*.tawk.to;
              `.replace(/\s+/g, ' ').trim()
            }
          ]
        }
      ]
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