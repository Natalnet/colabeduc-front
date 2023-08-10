"use client"

import { useState } from 'react'
import styles from './login.module.css'
import axios from 'axios';

export default function login(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginSubmit = () => {

        axios.post('http://colabeduc.org/api/login', {
            username : username,
            password : password
        })
        .then(function(response){
            console.log(response)
        })
        .catch(function(error){
            console.log(error)
        });

    }

    return(
        <main className={styles.main}>

            <header className={styles.header}>

            </header>

            <section className={styles.loginSection}>

                <div className={styles.loginContainer}>

                    <div className={styles.infoContainer}>

                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />

                        <button
                        onClick={handleLoginSubmit}
                        >submit</button>

                    </div>

                    <div></div>

                </div>

            </section>

        </main>
    )

}