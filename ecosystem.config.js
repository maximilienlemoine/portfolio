import "dotenv/config";

module.exports = {
    apps: [
        {
            name: process.env.PM2_APP_NAME || "portfolio-prod",

            cwd: process.env.APP_PATH,

            script: "node_modules/next/dist/bin/next",
            args: `start -p ${process.env.APP_PORT} -H ${process.env.APP_HOST}`,

            exec_mode: "fork",
            instances: 1,

            autorestart: true,
            watch: false,
            max_memory_restart: "1500M",
            kill_timeout: 3000,
            restart_delay: 3000,

            error_file: process.env.PM2_ERROR_LOG,
            out_file: process.env.PM2_OUT_LOG,
            log_date_format: "YYYY-MM-DD HH:mm:ss",
        },
    ],
};
