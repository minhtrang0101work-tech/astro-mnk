const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID || '';
const SANITY_DATASET = process.env.SANITY_DATASET || 'production';

export async function querySanity(groqQuery: string) {
  if (!SANITY_PROJECT_ID) return null;
  
  const encodedQuery = encodeURIComponent(groqQuery);
  // Basic query API URL for Sanity read queries
  const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
  
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  if (!res.ok) throw new Error(`Sanity query error: ${res.statusText}`);
  const { result } = await res.json();
  return result;
}
