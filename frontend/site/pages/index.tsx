import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Card from '../components/card';


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>MLB Data Analytics Project</h2>
        <h5>My Jesus Velarde and Anthony Lo</h5>
        <div className={ styles.card_display }>
          <Card title='Github Repository' imgSrc={ "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" }>
            <p>Check out the source code for this website and the data model</p>
            <a href="https://github.com/heyyysus/ml-mlb" className="btn btn-primary">Github Repo</a>
          </Card>
          <Card title="Try Out Model" imgSrc={ null }>
            <p>Run the model for any player here.</p>
            <Link href="/model" className="btn btn-primary">Try Model</Link>
          </Card>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
