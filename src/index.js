// Simple Logging Library - Main Logger Class
class Logger {
    constructor(logToFile = false) {
        this.logToFile = logToFile;
        this.logFile = 'app.log'; // default log file name
    }

    log(level, message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] [${level.toUpperCase()}]: ${message}`;
        console.log(logMessage);
        if (this.logToFile) {
            this._writeToFile(logMessage);
        }
    }

    info(message) {
        this.log('info', message);
    }

    warning(message) {
        this.log('warning', message);
    }

    error(message) {
        this.log('error', message);
    }

    _writeToFile(logMessage) {
        const fs = require('fs');
        fs.appendFile(this.logFile, logMessage + '\n', (err) => {
            if (err) {
                console.error('Failed to write log to file', err);
            }
        });
    }
}

module.exports = Logger;
