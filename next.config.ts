import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL(`${process.env.NEXT_PUBLIC_API_URL}upload/**`)],
    },
    experimental: {
        serverActions: {
            bodySizeLimit: "1000mb",
        },
    },
};

export default nextConfig;
