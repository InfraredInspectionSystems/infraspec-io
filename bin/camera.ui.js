#!/usr/bin/env node

process.title = 'camera.ui';

const os = require('os');
const path = require('path');
const commander = require('commander');

const { LoggerService } = require('../src/services/logger/logger.service');

let debugEnabled = '0';
let logTimestamps = '1';
let logColourful = '1';
let storagePath = path.resolve(os.homedir(), '.camera.ui');

commander
  .allowUnknownOption()
  .option('-D, --debug', 'turn on debug level logging', () => (debugEnabled = '1'))
  .option('-C, --no-color', 'disable color in logging', () => (logColourful = '0'))
  .option('-T, --no-timestamp', 'do not issue timestamps in logging', () => (logTimestamps = '0'))
  .option(
    '-S, --storage-path [path]',
    'look for camera.ui files at [path] instead of the default location (~/.camera.ui)',
    (p) => (storagePath = p)
  )
  .parse(process.argv);

process.env.CUI_SERVICE_MODE = '1';

process.env.CUI_LOG_COLOR = logColourful;
process.env.CUI_LOG_DEBUG = debugEnabled;
process.env.CUI_LOG_TIMESTAMPS = logTimestamps;

process.env.CUI_STORAGE_PATH = storagePath;
process.env.CUI_STORAGE_CONFIG_FILE = path.resolve(storagePath, 'config.json');
process.env.CUI_STORAGE_DATABASE_PATH = path.resolve(storagePath, 'database');
process.env.CUI_STORAGE_DATABASE_USER_PATH = path.resolve(storagePath, 'database', 'user');
process.env.CUI_STORAGE_DATABASE_FILE = path.resolve(storagePath, 'database', 'database.json');
process.env.CUI_STORAGE_RECORDINGS_PATH = path.resolve(storagePath, 'recordings');

LoggerService.create();

require('../src/main');