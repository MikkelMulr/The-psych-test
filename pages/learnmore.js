import React from 'react'
import Image from 'next/image'
import heroImage from '../public/bgx1.png'
import classes from '../styles/LearnMore.module.css'
import SideText from '../components/ui/SideText'

export default function learnmore() {
  return (
    <div className={classes.LearnMore}>
      {/* <h1>About the test</h1> */}
      <section className={classes.LearnMoreHero}>
        <SideText />
        <Image src={heroImage} alt="Black and white sketch of undefined shapes and lines" />
      </section>
      <section className={classes.LearnMoreMain}>
        <div className={classes.LearnMoreContainer}>

        <article className={classes.ArticleDark}>
          <h2>The PCL-R</h2>
          <p>
            The Psychopath Checklist or Hare Psychopath Checklist-Revised, now the Psychopath Checklist-revised (PCL-R),
            is a psychological assessment tool most commonly used to assess the presence of psychopathy in individuals, most often 
            those institutionalized in the criminal justice system, and to differentiate them from those suffering from 
            antisocial personality disorder, a similar but distinct illness.
          </p>

          <p>
            It is a 20-item inventory of percieved personality traits and recorded behaviors, intended to be completed on the basis of 
            a semi-structured interview along with a review of 'collateral information' such as official records.
          </p>
        </article>

        <article className={classes.ArticleLight}>
          <p>Small disclaimer</p>
          <p>
            This website was not designed to be a reliable assessment tool, as mentioned above the PCL-R is only one part of a 
            proper assessment for the potential presence of psychopathy in an individual. More than anything this is an educational
            tool and should be treated as such. 
          </p>
        </article>
        </div>
      </section>
    </div>
  )
}
