/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        oAuthClientID: process.env.O_AUTH_CLIENT_ID,
        oAuthclientSecret: process.env.O_AUTH_CLIENT_SECRET,
        oAuthCallbackUrl: 'https://www.liinalaufer.com/auth/google/callback',
    }
};

export default nextConfig;
