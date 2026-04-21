export default async function handler(req, res) {
  // Разрешаем доступ только с нашего домена (безопасность)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  const targetUrl = 'https://gamma-api.polymarket.com/events?closed=false&active=true&limit=50';

  try {
    const response = await fetch(targetUrl);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Polymarket data' });
  }
}
