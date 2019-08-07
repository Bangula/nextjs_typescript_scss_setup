import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>This is NextJs project</title>
          <link rel="stylesheet" href="/_next/static/styles.css" />
          <link
            href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
