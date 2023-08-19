import { NextResponse } from "next/server";

let setToken = undefined;

export async function GET(request){

    return NextResponse.json({api_token: setToken})

}

export async function POST(request, response){

    let fetchedResponse = await request.json();

    setToken = fetchedResponse.apiToken;

    return NextResponse.json({api_token : fetchedResponse.apiToken})

}