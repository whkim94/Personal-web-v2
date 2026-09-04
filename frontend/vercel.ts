import {
  type Rewrite,
  type VercelConfig,
  routes,
  deploymentEnv,
} from '@vercel/config/v1';

// Replace with the Target value from RankAuthority proxy configuration.
const RA_PROXY_TARGET = 'https://mb-006fc5135ae4.rankauthority.com';

export const config: VercelConfig = {
  rewrites: [
    routes.rewrite('/blog(/.*)?', `${RA_PROXY_TARGET}/blog$1`, {
      requestHeaders: {
        'x-ra-proxy-key': deploymentEnv('RA_PROXY_KEY'),
      },
    }) as Rewrite,
  ],
};
