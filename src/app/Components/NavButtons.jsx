"use client"

import { useRouter } from "next/navigation"
import { deleteCookie, hasCookie } from "cookies-next";
import { useState } from "react";

export default function NavButtons() {

    const router = useRouter();

    const [loggedIn, setLoggedIn] = useState(false);

    useState(() => {

      if(hasCookie("X_Auth_Token")){setLoggedIn(true)};

    }, [])

    const logOut = () => {

        deleteCookie("X_Auth_Token");
        setLoggedIn(false);

    }

    return(loggedIn? 

      <>

        <a onClick={() => router.push("jogos")}>Jogos</a>

        <a onClick={logOut}>Sair</a>

      </>
      :

      <>

        <a>Cadastro</a>

        <a onClick={() => router.push("login")}>Login</a>

      </>
    )

}