import Layout from '../components/layout'
import Head from 'next/head'

function HomePage({ character }) {
    return (
      <Layout>
        <Head>
          <title>Anasayfa</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        
        <h1 className="title">Merhaba!</h1>
        <style jsx>{`
         
      `}</style>
      

      </Layout>
    )
  }

export async function getStaticProps(context) {
  // data fetch
  const data = await fetch("https://rickandmortyapi.com/api/character")
  return {
    props: {
      character: []
    }
  }
}
  
export default HomePage