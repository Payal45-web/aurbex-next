import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    sassOptions: {
        quietDeps: true,
        silenceDeprecations: ['legacy-js-api', 'import'],
    },
}

export default nextConfig