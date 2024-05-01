import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next Facebook Ad caption in seconds."
          />
          <meta property="og:site_name" content="twitterbio.com" />
          <meta
            property="og:description"
            content="Generate your next Facebook Ad caption in seconds."
          />
          <meta property="og:title" content="Facebook Ad Caption Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Facebook Ad Caption Generator" />
          <meta
            name="twitter:description"
            content="Generate your next Facebook Ad caption in seconds."
          />
          <meta
            property="og:image"
            content="https://twitterbio.com/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://twitterbio.com/og-image.png"
          />
          <script defer data-domain="vps.aenishshrestha.com" src="https://plausible.io/js/script.js"></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
