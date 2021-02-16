import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
    return (
      <Layout>
        <Head>
          <title>Anasayfa</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <h1 className="title">Welcome to Next.js!</h1>
        <style jsx>{`
        .title {
          color: white;
          background: blue;
        }
      `}</style>
      
      </Layout>
    )
  }
  
export default HomePage