"use client"

import { useState } from 'react'
import styles from './login.module.css'
import axios from 'axios';
import Header from '../Components/Header';

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

            {/* Header */}

            <Header/>

            <section className={styles.loginSection}>

                <div className={styles.loginContainer}>

                    <div className={styles.infoContainer}>

                        <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Nome de usuario'
                        />
                        <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Senha'
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