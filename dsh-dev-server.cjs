/**
 * Dev-server launcher for sandboxed environments.
 *
 * `next dev` normally forks a child over an IPC pipe, which this sandbox blocks
 * (spawn EPERM). Next's inner start-server module exports `startServer`, so we
 * call it here in-process instead -- no fork, no pipe, no production build needed.
 */
const path = require('path');

const dir = process.cwd();
const port = Number(process.env.PORT || 3111);
const hostname = process.env.HOSTNAME || '0.0.0.0';

const nextDir = path.dirname(require.resolve('next/package.json'));
const startServerMod = require(path.join(nextDir, 'dist/server/lib/start-server'));

if (typeof startServerMod.startServer !== 'function') {
  console.error('startServer export not found -- Next layout changed.');
  process.exit(1);
}

console.log(`> launching next dev in-process (port ${port})`);

startServerMod
  .startServer({ dir, port, hostname, isDev: true, allowRetry: false })
  .catch((err) => {
    console.error('failed to start dev server:', err);
    process.exit(1);
  });
