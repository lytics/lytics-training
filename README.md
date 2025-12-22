# Lytics Training

A sample frozen yogurt website used to demonstrate and learn about the Lytics platform.

## Tech Stack

- **Frontend:** Vue 3 + Vite
- **Routing:** Vue Router
- **Node Version:** 20.19.0 (managed via Volta)
- **Package Manager:** Yarn
- **Deployment:** Google App Engine

## Prerequisites

- [Volta](https://volta.sh/) for Node.js version management
- [Google Cloud SDK](https://cloud.google.com/sdk) (for deployment)

## Getting Started

### Install Dependencies

```bash
yarn install
```

### Run Development Server

```bash
yarn dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
yarn build
```

Output is generated in the `dist/` directory.

### Preview Production Build

```bash
yarn preview
```

## Google Tag Manager Setup

This site uses Google Tag Manager for analytics. To configure your GTM container:

1. Open your browser's developer console
2. Run the following command (replace with your GTM container ID):

```javascript
localStorage.setItem('gtmid', 'GTM-XXXXXXX')
```

3. Refresh the page

## Deployment

### Deploy to Google App Engine

```bash
yarn build
gcloud app deploy
```

### Multi-Service Deployment

For training environments with multiple students, you can deploy as separate services:

```bash
yarn build
gcloud app deploy --service=student01
```

This creates a unique URL: `https://student01-dot-[project].appspot.com`

## Project Structure

```
├── src/
│   ├── main.js           # Vue app entry point
│   ├── App.vue           # Root component
│   ├── router/           # Vue Router configuration
│   ├── components/       # Reusable components (Header, Footer)
│   ├── views/            # Page components
│   └── data/             # Product and blog data
├── public/
│   ├── images/           # Product and marketing images
│   └── fonts/            # Web fonts
├── index.html            # SPA entry point
├── vite.config.js        # Vite configuration
├── app.yaml              # App Engine configuration
└── package.json          # Dependencies and scripts
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |
