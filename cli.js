#!/usr/bin/env node

const { program } = require('commander');
const chalk = require('chalk');

program
  .name('privacy-ai-cli')
  .description('CLI for privacy-preserving AI model training using zkSNARKs')
  .version('0.0.1');

program
  .command('train')
  .description('Train AI model on private dataset')
  .requiredOption('--data <path>', 'Path to dataset CSV file')
  .requiredOption('--model <type>', 'Type of model, e.g., logistic')
  .action((options) => {
    console.log(chalk.green(`🔧 Training ${options.model} model on ${options.data}...`));
  });

program.parse(process.argv);
