import Document, {Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html className='bg-gradient-to-r from-cyan-500 to-blue-500'>
        <Head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.png"/>
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