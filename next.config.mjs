/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingIncludes: {
    database: ["./database/**/*"],
    "database-broke": ["./database-broke/**/*"],
  },
};

export default nextConfig;
