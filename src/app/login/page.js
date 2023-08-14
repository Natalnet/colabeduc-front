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

                        <div className={styles.inputContainer}>

                            <input
                            type='input'
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            placeholder="   "
                            />

                            <span>
                                Nome de usuario
                            </span>

                            <label>
                                Nome de usuario
                            </label>

                        </div>

                        <div className={styles.inputContainer}>

                            <input
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            placeholder="   "
                            />

                            <span>
                                Senha
                            </span>

                            <label>
                                Senha
                            </label>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    )

}