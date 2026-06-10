# Lbby License Generator

A simple, secure tool for generating Ed25519-signed JWT license keys for the Lbby app.

## Features

- **Generate Ed25519 key pairs** — Create new signing keys directly in the browser
- **Generate JWT licenses** — Create signed licenses for Novice or Master tiers
- **Device binding** — Optionally lock a license to a specific device
- **Expiry presets** — Quick buttons for 7d, 30d, 90d, 6mo, 1y, 10y, or unlimited
- **JWT decoder** — Decode and inspect any JWT
- **Signature verification** — Verify JWT signatures with the public key
- **History tracking** — Keep track of generated licenses (stored in browser)
- **Export history** — Download license history as JSON

## How It Works

1. **Private key stays in the browser** — Stored in localStorage, never sent anywhere
2. **JWTs are generated client-side** — Using the Web Crypto API's Ed25519 support
3. **No server required** — This is a static HTML file that works offline

## Usage

### First Time Setup

1. Open `index.html` in your browser
2. Either:
   - **Generate a new key pair** — Click "Generate New Key Pair" to create new Ed25519 keys
   - **Use existing keys** — Paste your existing private key in PEM format

3. Save the private key (click "Save Key")
4. **Important:** Copy the public key and update `license-public.pem` in the Lbby app

### Generating a License

1. Enter the **User ID** (e.g., Telegram ID or email)
2. Select the **Tier** (Novice or Master)
3. Set the **Expiry** (use quick presets or enter custom days)
4. Optionally fill in:
   - Email
   - Telegram username
   - Device binding (if user wants license locked to one device)
5. Click **Generate License Key**
6. Copy the JWT and give it to the user

### Device-Bound Licenses

If a user wants their license locked to a specific device:

1. Ask the user to open the Lbby app
2. Go to License tab → Advanced section
3. Copy their **Device ID**
4. In the generator, check "Bind to specific device"
5. Paste the Device ID
6. Generate the license

### User Activation

Tell the user to:

1. Open the Lbby app
2. Go to the **License** tab
3. Click **"Advanced"** at the bottom
4. Paste the license key
5. Click **"Activate"**

## Browser Requirements

This tool uses the Web Crypto API's Ed25519 support:

- **Chrome 113+** ✅
- **Firefox 111+** ✅
- **Safari 17+** ✅
- **Edge 113+** ✅

Older browsers may not support Ed25519 key generation.

## Security Notes

- **Private keys never leave the browser** — Stored in localStorage, not sent to any server
- **No backend required** — Everything runs client-side
- **History is local only** — License generation history is stored in your browser
- **Use HTTPS if hosting online** — If you host this on a web server, use HTTPS

## Hosting

### Local Use
Just open `index.html` in your browser. No server needed.

### GitHub Pages
1. Push this folder to a GitHub repo
2. Enable GitHub Pages in repo settings
3. Access at `https://yourusername.github.io/repo-name/`

### Other Hosting
Upload `index.html` to any static hosting service (Netlify, Vercel, etc.)

## File Structure

```
lbby-license-generator/
├── index.html    # Main tool (single file, no dependencies)
└── README.md     # This file
```

## Key Pair Management

### Generating New Keys

1. Click "Generate New Key Pair"
2. **Save both keys:**
   - **Private Key** → Keep secret, paste into the generator
   - **Public Key** → Update `license-public.pem` in the Lbby app

### Using Existing Keys

If you already have an Ed25519 private key in PEM format:

1. Paste it in the "Private Key" textarea
2. Click "Save Key"

## Troubleshooting

### "Your browser may not support Ed25519"
- Update your browser to the latest version
- Try Chrome 113+ or Firefox 111+

### "Error generating license"
- Make sure you've saved a private key
- Check that the User ID is not empty
- If using device binding, make sure the Device ID is provided

### License not activating in the app
- Make sure the public key in the app matches the private key used to sign
- Check that the JWT wasn't truncated when copying
- Verify the JWT hasn't expired

## Development

This is a single HTML file with no build steps. To modify:

1. Edit `index.html` directly
2. Open in browser to test
3. No compilation or bundling needed

## License

This tool is for Lbby administrators only. Keep your private keys secure.
