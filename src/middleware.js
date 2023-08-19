import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req){

    const NResponse = NextResponse.next();

    const teste = req.cookies.get('x_auth_token');

    if(teste == undefined){

        let teste = await fetch('/api/login');
        let testeJson = teste.json();

    }

    return NResponse;

}

export const config = {

    matcher : '/',

}