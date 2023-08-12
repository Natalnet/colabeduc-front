"use client"

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css"

export default function header(){

    return(
        <header className={styles.header}>

          <div className={styles.headerIconContainer}>

            <Link
            href="https://www.instagram.com/colabeduc/"
            target="_blank"
            className={styles.instagramLink}
            >

              <Image
              src="/instagramIcon.svg"
              width={24}
              height={24}
              alt="instagram icon"
              className={styles.instagramIcon}
              />

            </Link>

            <div>

              <a>Sobre Nós</a>
              <a>Contato</a>

            </div>

          </div>

        </header>
    )
}