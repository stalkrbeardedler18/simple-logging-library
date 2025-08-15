# Simple Logging Library

## Overview
The Simple Logging Library provides a minimalistic logging solution tailored for developers seeking to implement straightforward, readable, and maintainable logging practices in their applications.

## Features
- Simple API for logging messages
- Different log levels (info, warning, error)
- Optional timestamp formatting
- File output support

## Installation
You can install the library via npm:
```bash
npm install simple-logging-library
```

## Usage
Here is a basic example of how to use the Simple Logging Library:
```javascript
const Logger = require('simple-logging-library');
const logger = new Logger();

logger.info('Application has started.');
logger.warning('This is a warning message.');
logger.error('An error occurred!');
```

## Contributing
Feel free to fork the repository and submit pull requests. Any improvements and suggestions are welcomed!

## License
This project is licensed under the MIT License.
