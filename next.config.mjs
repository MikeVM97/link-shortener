/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["mongoose"],
    esmExternals: "loose",
  },
  // webpack: (config) => {
  //   config.resolve.fallback = {
  //     "mongodb-client-encryption": false,
  //     aws4: false,
  //   };
  //   return config;
  // },
};

export default nextConfig;
