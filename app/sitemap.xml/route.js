export const revalidate = 3600; // Cache for 1 hour

const BASE_URL = 'https://mstblockchain.com'; // Replace with your actual production domain
const CMS_URL = "https://cms.mstblockchain.com";

export async function GET() {
  const staticRoutes = [
    '',
    '/Block-validation',
    '/dao',
    '/fractional-validator',
    '/grant',
    '/solidity',
    '/tranpernaency',
    '/Carbon-Credit-Tracking',
    '/Charity-Donations',
    '/Decentralized-Social-Platforms',
    '/Decentralized-Voting',
    '/Digital-Asset-Exchange',
    '/Digital-Identity-KYC',
    '/Education-Credentials',
    '/Enterprise-Workflow-Automation',
    '/Freelance-Marketplace',
    '/Gaming-Asset-Ownership',
    '/Gold-Commodity-Tokenization',
    '/Healthcare-Records',
    '/Insurance-Automation',
    '/Land-Records',
    '/Loyalty-Rewards',
    '/NFT-Ticketing',
    '/On-Chain-Certificate',
    '/Supply-Chain-Transparency',
    '/Tokenized-Real-Estate',
    '/about',
    '/Ambassador',
    '/BlogsPage',
    '/Career',
    '/contact',
    '/Mst-acadmey',
    '/past-event',
    '/Protocol',
    '/roadmap',
    '/teams',
    '/upcoming-events',
    '/validator'
  ];

  let blogRoutes = [];
  try {
    const res = await fetch(`${CMS_URL}/api/blogs?fields[0]=slug&fields[1]=updatedAt`, { next: { revalidate: 3600 } });
    if (res.ok) {
      const data = await res.json();
      if (data && data.data) {
        blogRoutes = data.data;
      }
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  // Manually construct the XML string so we can inject the XSL stylesheet link
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add Static Routes
  staticRoutes.forEach((route) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}${route}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    xml += `    <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Add Blog Routes
  blogRoutes.forEach((blog) => {
    xml += `  <url>\n`;
    xml += `    <loc>${BASE_URL}/blog-details/${blog.slug}</loc>\n`;
    xml += `    <lastmod>${new Date(blog.updatedAt || new Date()).toISOString()}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
