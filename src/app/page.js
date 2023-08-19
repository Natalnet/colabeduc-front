"use client"

//"Icon made by Freepik from www.flaticon.com"
// remeber to attribute credit for the icons

import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from './Components/Header'

export default function Home() {

  const router = useRouter();
  const [carrouselPos, setCarrouselPos] = useState(0);

  const handleCarrousel = (direction) => {

    let newCarrouselPos = carrouselPos;

    newCarrouselPos = carrouselPos + direction;

    if(newCarrouselPos > 66.66){
      newCarrouselPos = 0;
    }else if(newCarrouselPos < 0){
      newCarrouselPos = 66.66;
    }

    setCarrouselPos(newCarrouselPos);

  }

  const testFetch = async () => {

    let teste = await fetch('/api/login');
    let testJson = await teste.json();

    console.log(testJson);

  }

  return (

    <main>

      <section className={styles.topDiv}>

        {/* Header */}

        <Header/>

        {/* Main Info */}
        <div className={styles.mainInfo}>

          {/* Nav Buttons & Logo */}
          <nav className={styles.mainNav}>

            <div className={styles.logoContainer}>

              <h1>ColabEduc</h1>
              <h2>Juntos, Construindo a educação</h2>
              
            </div>

            <div className={styles.navButtonContainer}>

              <a
              onClick={testFetch}
              >Cadastro</a>
              <a
              onClick={() => router.push('login')}
              >Login</a>

            </div>

          </nav>

          {/* Stat Cards */}
          <div className={styles.statsCards}>

            <div className={styles.statCard}>

            </div>

            <div className={styles.statCard}>

            </div>

            <div className={styles.statCard}>

            </div>

            <div className={styles.statCard}>

            </div>

          </div>

        </div>

      </section>

      <section className={styles.carrouselSection}>

        <div className={styles.topPurple}></div>
        <div className={styles.bottomWhite}></div>

        <div className={styles.carrouselContainer}>

          <button
          onClick={() => handleCarrousel (-33.33)}
          >

            <Image
            src="/arrow.png"
            width={20}
            height={20}
            alt='left Arrow'
            className={styles.leftArrow}
            />
            
          </button>

          <button
          onClick={() => handleCarrousel (33.33)}
          >

            <Image
            src="/arrow.png"
            width={20}
            height={20}
            alt='left Arrow'
            className={styles.rightArrow}
            />

          </button>

          <div 
          className={styles.carrousel}
          style={{['--carrousel-pos'] : -carrouselPos + "%"}}
          >

            <div className={styles.carrouselCard}>

              <Image
              src="/colabImage2.png"
              width={1200}
              height={540}
              alt='colab image 2'
              className={styles.carrouselImage}
              />

            </div>

            <div className={styles.carrouselCard}>

              <Image
              src="/colabImage3.png"
              width={1200}
              height={540}
              alt='colab image 3'
              className={styles.carrouselImage}
              />

            </div>

            <div className={styles.carrouselCard}>

              <Image
              src="/colabImage1.png"
              width={1200}
              height={540}
              alt='colab image 1'
              className={styles.carrouselImage}
              />

            </div>

          </div>

        </div>

        <div className={styles.carrouselInfo}>
          <p>O ColabEduc é um sistema de desenvolvimento colaborativo de objetos de aprendizagem, sejam eles virtuais ou reais. O ColabEduc cria um ambiente onde profissionais de diferentes áreas possam colaborar, construir e compartilhar seus objetos de aprendizagem.</p>
        </div>

      </section>

    </main>

  )
}
