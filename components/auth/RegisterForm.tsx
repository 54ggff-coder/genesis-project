components/auth/RegisterForm.tsx

"use client";

import { useState } from "react";

import { signUp } from "@/lib/auth";

export default function RegisterForm(){

const[email,setEmail]=useState("");

const[password,setPassword]=useState("");

async function handleSubmit( e:React.FormEvent ){

e.preventDefault();

const{error}=await signUp( email, password );

if(error){

alert(error.message);

return;

}

alert( "Check your email." );

}

return(

Create Account

<input

className="w-full border rounded-xl p-3"

placeholder="Email"

type="email"

onChange={(e)=>setEmail(e.target.value)}

/>

<input

className="w-full border rounded-xl p-3"

placeholder="Password"

type="password"

onChange={(e)=>setPassword(e.target.value)}

/>

<button

className="bg-black text-white w-full rounded-xl p-3"

Create Account

);

}