# Lytics Training Demo Site

A sample frozen yogurt e-commerce website used to demonstrate and learn about the Lytics platform. Each team member can deploy their own instance with a unique GTM container.

## Tech Stack

- **Framework:** Vue 3 + Vite
- **Styling:** Tailwind CSS
- **Routing:** Vue Router
- **State:** Pinia
- **Node Version:** 20.19.0 (managed via Volta)
- **Package Manager:** Yarn
- **Deployment:** Google App Engine

## Prerequisites

- [Volta](https://volta.sh/) for Node.js version management (or Node 20+)
- [Google Cloud SDK](https://cloud.google.com/sdk) (for manual deployment)

## Local Development

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

### Test with a GTM Container Locally

```bash
VITE_GTM_ID=GTM-XXXXXXX yarn build
yarn preview
```

## Deployment

### Automated Deployment (Recommended)

Use the GitHub Actions workflow to deploy your own instance:

1. Go to **Actions** tab in GitHub
2. Select **"Deploy to Google App Engine"**
3. Click **"Run workflow"**
4. Fill in the inputs:
   - **Subdomain:** Your name (e.g., `mark`, `lindsey`)
   - **GTM Container ID:** Your GTM container (e.g., `GTM-XXXXXXX`)
   - **Branch:** `master` (or your feature branch)
5. Click **"Run workflow"**

Your site will be available at:
- `http://[subdomain].lyticsdemo.com`
- `https://[subdomain]-dot-lyticsdemo.uc.r.appspot.com`

### Manual Deployment

```bash
# Build with your GTM container ID
VITE_GTM_ID=GTM-XXXXXXX yarn build

# Deploy to App Engine with your version name
gcloud app deploy --project=lyticsdemo --version=yourname --no-promote
```

## Project Structure

```
├── src/
│   ├── main.js           # Vue app entry point
│   ├── App.vue           # Root component
│   ├── router/           # Vue Router configuration
│   ├── stores/           # Pinia stores (cart, auth)
│   ├── components/       # Reusable components
│   ├── views/            # Page components
│   └── data/             # Product and blog data
├── public/
│   ├── images/           # Product and marketing images
│   └── fonts/            # Web fonts
├── .github/
│   └── workflows/        # GitHub Actions deployment workflow
├── index.html            # SPA entry point with GTM placeholder
├── vite.config.js        # Vite configuration with GTM injection
├── app.yaml              # App Engine configuration
└── package.json          # Dependencies and scripts
```

## How GTM Injection Works

The site uses build-time GTM injection:

1. `index.html` contains `__GTM_CONTAINER_ID__` placeholders
2. `vite.config.js` has a plugin that replaces these with the `VITE_GTM_ID` environment variable during build
3. The GitHub Actions workflow sets this variable based on your input

In development mode (no GTM ID set), you'll see a console warning and GTM won't load.

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production |
| `yarn preview` | Preview production build locally |

## Contributing

1. Create a feature branch from `master`
2. Make your changes
3. Test locally with `yarn dev`
4. Push your branch
5. Deploy using the GitHub Actions workflow (select your branch)
6. Create a pull request when ready

## Repository Secrets (Admin Setup)

For the GitHub Actions workflow to function, these secrets must be configured:

| Secret | Description |
|--------|-------------|
| `GCP_PROJECT_ID` | Google Cloud project ID (`lyticsdemo`) |
| `GCP_SERVICE_ACCOUNT` | Service account email for deployments |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | Workload Identity Federation provider |
