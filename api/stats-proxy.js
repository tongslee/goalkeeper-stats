// api/stats-proxy.js

export default async function handler(req, res) {
  try {
    const upstream = await fetch('https://keeper-upload-api.vercel.app/api/stats');

    const data = await upstream.json();

    // (CORS here is optional, but harmless)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(upstream.status).json(data);
  } catch (err) {
    console.error('Stats proxy error:', err);
    res.status(500).json({ error: 'Failed to fetch stats from upstream' });
  }
}
