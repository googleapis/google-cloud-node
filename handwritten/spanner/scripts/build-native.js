const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 1. Build the Rust native addon
const compileRust = process.env.COMPILE_RUST_ADDON !== 'false';
if (compileRust) {
  const nativeDir = path.join(__dirname, '../native');
  console.log(`Building Rust native addon in: ${nativeDir}`);
  try {
    execSync('cargo build --release', { cwd: nativeDir, stdio: 'inherit' });

    let libName;
    if (process.platform === 'darwin') {
      libName = 'libnative.dylib';
    } else if (process.platform === 'win32') {
      libName = 'native.dll';
    } else {
      libName = 'libnative.so'; // Linux/Unix
    }

    const srcPath = path.join(nativeDir, 'target/release', libName);
    const destPath = path.join(nativeDir, 'native.node');

    if (!fs.existsSync(srcPath)) {
      throw new Error(`Compiled Rust library not found at ${srcPath}`);
    }

    console.log(`Copying compiled Rust library: ${srcPath} -> ${destPath}`);
    fs.copyFileSync(srcPath, destPath);
    if (process.platform === 'darwin') {
      try {
        console.log(`Signing native addon on macOS: ${destPath}`);
        execSync(`codesign -s - -f "${destPath}"`);
      } catch (signErr) {
        console.warn('Failed to sign native addon. You may need to sign it manually or install command-line tools:', signErr);
      }
    }
    console.log('Rust native addon built successfully!');
  } catch (err) {
    console.error('Failed to build Rust native addon:', err);
    process.exit(1);
  }

  // Build Subham's prototype addon if the directory exists
  const subhamDir = path.join(__dirname, '../native_subham');
  if (fs.existsSync(subhamDir)) {
    console.log(`Building Subham's Rust native addon in: ${subhamDir}`);
    try {
      // Ensure napi CLI is installed in the subfolder
      if (!fs.existsSync(path.join(subhamDir, 'node_modules'))) {
        console.log(`Installing devDependencies in ${subhamDir}...`);
        execSync('npm install --registry=https://registry.npmjs.org/ --no-audit --no-fund', { cwd: subhamDir, stdio: 'inherit' });
      }
      execSync('npm run build', { cwd: subhamDir, stdio: 'inherit' });
      console.log("Subham's Rust native addon built successfully!");
    } catch (err) {
      console.error("Failed to build Subham's Rust native addon:", err);
      process.exit(1);
    }
  }
} else {
  console.log('Skipping Rust native addon build (COMPILE_RUST_ADDON is false).');
}

// 2. Build the Go native addon
const compileGo = process.env.COMPILE_GO_ADDON === 'true';
if (compileGo) {
  const nativeGoDir = path.join(__dirname, '../native-go');
  console.log(`Building Go native addon in: ${nativeGoDir}`);
  try {
    const env = { ...process.env };
    if (process.platform === 'darwin') {
      env.CGO_LDFLAGS = '-Wl,-undefined,dynamic_lookup';
    }
    execSync('go build -buildmode=c-shared -o native.node', {
      cwd: nativeGoDir,
      stdio: 'inherit',
      env
    });
    console.log('Go native addon built successfully!');
  } catch (err) {
    console.error('Failed to build Go native addon:', err);
    process.exit(1);
  }
} else {
  console.log('Skipping Go native addon build (COMPILE_GO_ADDON is not true).');
}

