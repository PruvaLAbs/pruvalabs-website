import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/pruva-assist",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/assist/:path*",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/accounts/:path*",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/brands/:path*",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/admin/pruva-core",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/dashboard",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/demo",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/operations",
        destination: "/pruvai",
        permanent: true,
      },
      {
        source: "/product",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
