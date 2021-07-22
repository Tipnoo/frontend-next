module.exports = {
  env: {
    BACKEND_URI: process.env.BACKEND_URI,
    STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tipnoo.herokuapp.com/:path*',
      },
    ];
  },
};
