export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl = process.env.VERCEL_URL;

  if (configuredUrl) return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
  if (vercelUrl) return `https://${vercelUrl}`;
  return "http://localhost:3000";
}
