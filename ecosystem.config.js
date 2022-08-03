module.exports = {
  apps: [
    {
      name: 'InfraSpecUI',
      script: 'node --trace-warnings bin/camera.ui.js -L 2 -S ./test/camera.ui',
      watch: true,
      //watch_delay: 1000,
      max_memory_restart: '20G',
      node_args: ['--max-old-space-size=6144'],
    },
  ],
};
