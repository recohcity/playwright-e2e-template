import fs from 'fs';
import path from 'path';
export async function GET() {
  const logDir = path.join(process.cwd(), 'playwright-test-logs');
  const files = fs.readdirSync(logDir).filter(f => f.endsWith('.md'));
  const trendData = files.map(file => {
    const content = fs.readFileSync(path.join(logDir, file), 'utf-8');
    const match = content.match(/<!--\s*(\{[\s\S]*?\})\s*-->/);
    if (match && match[1]) {
      return JSON.parse(match[1]);
    }
    return null;
  }).filter(Boolean);
  return new Response(JSON.stringify(trendData.reverse()));
}
