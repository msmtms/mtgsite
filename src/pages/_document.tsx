import { Html, Head, Main, NextScript } from 'next/document';
import { createGenerateId, JssProvider, SheetsRegistry, ThemeProvider } from 'react-jss';

const STANDARD_HEIGHT = 1080;
const generateId = createGenerateId();

export default function Document() {
  async function getInitialProps({ renderPage }) {
    const sheets = new SheetsRegistry();

    const decoratePage = (Page: any) => {
      return (props: any) => (
        <JssProvider registry={sheets}>
          <Page {...props} />
        </JssProvider>
      );
    };

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style type="text/css" data-meta="jss-ssr" dangerouslySetInnerHTML={{ __html: sheets.toString() }} />
    );

    return { ...renderedPage, styles };
  }

  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'anonymous'} />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
      </Head>
      <JssProvider generateId={generateId}>
        <ThemeProvider theme={{ standardHeight: STANDARD_HEIGHT }}>
          <body style={{ padding: '0', margin: '0', position: 'relative' }}>
          <Main />
          <NextScript />
          </body>
        </ThemeProvider>
      </JssProvider>
    </Html>
  );
}
