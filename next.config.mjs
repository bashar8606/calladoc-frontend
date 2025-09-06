/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '40.172.190.110',
                port: '1337',
            },{
              protocol: 'https',
              hostname: 'admin.calladoc.ae',
              port: '',
          },
              {
        
                protocol: 'http',
                hostname: '127.0.0.1',
                port: '1337',
              }
            
        ],
        formats: ['image/webp'],
    },
};

export default nextConfig;
