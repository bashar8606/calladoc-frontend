/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '40.172.190.110',
                port: '1337',
            },{
              protocol: 'http',
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
