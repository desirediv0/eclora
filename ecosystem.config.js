module.exports = {
    apps: [
        {
            name: "eclora",
            cwd: "/root/eclora",
            script: "npm",
            args: "start",
            env: {
                NODE_ENV: "production",
                PORT: 7011
            },
            instances: 1,
            exec_mode: "fork",
            autorestart: true,
            watch: false,
            max_memory_restart: "800M",
            error_file: "/root/.pm2/logs/eclora-error.log",
            out_file: "/root/.pm2/logs/eclora-out.log",
            log_date_format: "DD/MM/YYYY HH:mm:ss"
        }
    ]
};
