#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Utility to run commands
const run = (command, cwd = process.cwd()) => {
  console.log(`\n📦 Running: ${command}\n`);
  execSync(command, { stdio: 'inherit', cwd });
};

// Check Node.js version
const requiredNodeVersion = fs.readFileSync('.nvmrc', 'utf8').trim();
const currentNodeVersion = process.version.slice(1); // Remove 'v' prefix

if (!currentNodeVersion.startsWith(requiredNodeVersion)) {
  console.error(`\n❌ Error: Required Node.js version ${requiredNodeVersion} not met. Current version: ${currentNodeVersion}`);
  console.log(`\n💡 Tip: Use nvm to install and use the correct version:`);
  console.log(`   nvm install ${requiredNodeVersion}`);
  console.log(`   nvm use ${requiredNodeVersion}\n`);
  process.exit(1);
}

// Clean install in root and workspaces
console.log('\n🚀 Starting fresh installation...\n');

// Remove existing lock files and node_modules
const cleanCommand = process.platform === 'win32' 
  ? 'if exist node_modules rmdir /s /q node_modules && if exist package-lock.json del package-lock.json'
  : 'rm -rf node_modules package-lock.json';

try {
  // Clean root
  run(cleanCommand);

  // Clean workspaces
  const workspaces = [
    'apps/mobile-app',
    'apps/backend-api',
    'packages/reflection-logic',
    'packages/voice-kit',
    'packages/shared'
  ];

  workspaces.forEach(workspace => {
    if (fs.existsSync(workspace)) {
      run(cleanCommand, workspace);
    }
  });

  // Install dependencies
  run('npm install --no-audit');

  console.log('\n✅ Setup completed successfully!\n');
  console.log('Next steps:');
  console.log('1. Set up your environment variables');
  console.log('2. Start the development servers:');
  console.log('   npm run dev:api    # Start backend API');
  console.log('   npm run dev:mobile # Start mobile app\n');

} catch (error) {
  console.error('\n❌ Setup failed:', error.message);
  process.exit(1);
} 