# Walkathon Scripts

Google Apps Script project for managing walkathon events.

## Project Structure

```
walkathon-scripts/
├── src/                    # Source files for Google Apps Script
│   ├── appsscript.json     # Apps Script project manifest
│   └── Code.gs             # Main script file
├── .clasp.json.example     # Example clasp configuration (copy to .clasp.json)
├── .claspignore            # Files to ignore when pushing to Apps Script
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [clasp](https://github.com/google/clasp) - Google Apps Script CLI

## Setup

1. Install clasp globally:
   ```bash
   npm install -g @google/clasp
   ```

2. Login to your Google account:
   ```bash
   clasp login
   ```

3. Copy the example clasp configuration:
   ```bash
   cp .clasp.json.example .clasp.json
   ```

4. Create a new Google Apps Script project or link to an existing one:
   ```bash
   # Create a new standalone project
   clasp create --title "Walkathon Scripts" --rootDir src

   # Or link to an existing project by updating .clasp.json with your scriptId
   ```

## Usage

### Push changes to Google Apps Script

```bash
clasp push
```

### Pull changes from Google Apps Script

```bash
clasp pull
```

### Open the project in the Apps Script editor

```bash
clasp open
```

## License

MIT