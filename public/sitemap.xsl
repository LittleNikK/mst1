<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | MST Blockchain</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          body {
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            color: #333;
            background-color: #0B1520;
            margin: 0;
            padding: 40px 20px;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #162436;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.4);
            border: 1px solid #1E3048;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid #1E3048;
          }
          h1 {
            color: #ffffff;
            font-size: 28px;
            margin: 0;
            font-weight: 700;
          }
          .badge {
            background: rgba(201,160,48,0.15);
            color: #C9A030;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            border: 1px solid rgba(201,160,48,0.3);
          }
          p {
            color: #CBD5E0;
            margin-bottom: 30px;
            line-height: 1.6;
          }
          a {
            color: #4da3ff;
            text-decoration: none;
            transition: color 0.2s;
          }
          a:hover {
            color: #C9A030;
            text-decoration: underline;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
          }
          th, td {
            text-align: left;
            padding: 16px 12px;
            border-bottom: 1px solid #1E3048;
          }
          th {
            background-color: #0F1E2E;
            color: #CBD5E0;
            font-weight: 600;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-top: 1px solid #1E3048;
          }
          tr:hover {
            background-color: #1a2a40;
          }
          td {
            color: #a0aec0;
          }
          .url-col { width: 55%; font-weight: 500; }
          .date-col { width: 20%; }
          .freq-col { width: 15%; text-transform: capitalize; }
          .pri-col { width: 10%; text-align: right; font-weight: 600; color: #C9A030; }
          
          .footer {
            margin-top: 40px;
            text-align: center;
            font-size: 12px;
            color: #7A90A8;
            padding-top: 20px;
            border-top: 1px solid #1E3048;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>MST Blockchain Sitemap</h1>
            <div class="badge"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> Valid URLs</div>
          </div>
          <p>This is an automatically generated XML Sitemap for search engines (like Google and Bing) to crawl and index the website. <br/>You are viewing the human-readable styled version.</p>
          <table>
            <thead>
              <tr>
                <th class="url-col">Page URL</th>
                <th class="date-col">Last Modified</th>
                <th class="freq-col">Change Frequency</th>
                <th class="pri-col">Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td class="url-col">
                    <a href="{sitemap:loc}" target="_blank">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td class="date-col">
                    <xsl:value-of select="substring(sitemap:lastmod, 0, 11)"/>
                  </td>
                  <td class="freq-col">
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td class="pri-col">
                    <xsl:value-of select="sitemap:priority"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            Generated dynamically by MST Blockchain Next.js Application
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
