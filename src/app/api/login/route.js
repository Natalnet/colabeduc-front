import { NextResponse } from "next/server";

let setToken = undefined;

export async function GET(){

    return NextResponse.json({token : setToken});

}

export async function POST(request){

    let fetchedResponse = await request.json();

    setToken = fetchedResponse.apiToken;

    return NextResponse.json({api_token : fetchedResponse.apiToken});

}