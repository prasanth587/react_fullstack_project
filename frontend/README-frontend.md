# Frontend (React + Vite)

## Setup

1. Install dependencies:

   ```bash
   cd frontend
   npm install
   ```

2. Run the dev server:

   ```bash
   npm run dev
   ```

   The app will run on http://localhost:5173

## API

In `vite.config.js` there is a proxy:

```js
server: {
  proxy: {
    "/api": "http://localhost:5000"
  }
}
```

So any request like `fetch("/api/form1")` from the frontend
is automatically forwarded to the backend on port 5000.
