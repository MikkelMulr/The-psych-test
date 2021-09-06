import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'
import heroImage from '../public/bgx1.png'
import SideText from '../components/ui/SideText'
import Button from '../components/ui/Button'

export default function Home() {
  return (
    <div className={classes.Home}>
      <Head>
        <title>The Psychopath Test</title>
        <meta name="description" content="Test based on the Bob Hare checklist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={classes.HomeHero}>
        <SideText />
        <Image src={heroImage} alt="Black and white skatch of undefined shapes and lines" />
      </section>

      <section className={classes.HomeMain}>
        <div className={classes.HomeMainContainer}>
          <article className={classes.HomeMainHeader}>
            <header>
              <h2>psy·cho·path</h2>
              <p>/ˈsīkəˌpaTH/</p>
              <div className={classes.HomeMainText}>
                <p>
                  a person suffering from chronic mental disorder with abnormal or violent social behavior.
                </p>
              </div>
            </header>
          </article>
          <article className={classes.HomeMainDesc}>
            <p>Ahead of you are a series of questions that comprise the checklist. Answer them as truthfully as you are capable.</p>
          </article>
          <Button route='/' text='Take the test'/>
        </div>
      </section>
    </div>
  )
}
