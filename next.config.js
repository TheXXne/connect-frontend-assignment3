/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "bafybeies3odi24wyk3e22rnautr57tiuk3b56nxrd53fxgtvr37abmz5j4.ipfs.cf-ipfs.com",
    ],
  },
};

module.exports = nextConfig;
