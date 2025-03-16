"use client";
import { createUserWithPasswordAction, signInWithPasswordAction } from "@/services/user";
import { useState } from "react";


export default function Page(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [emailSignIn, setSignInEmail] = useState("");
    const [passwordSignIn, setpasswordSignIn] = useState("");

    return (
        <div>
            <h2>Sign up</h2>
            <input type="text" onChange={(e)=> setEmail(e.target.value)}/>
            <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
            <input type="text" onChange={(e)=> setUsername(e.target.value)}/>
            <button onClick={()=> createUserWithPasswordAction(email, username, password )}>Sign Up</button>
            
            <h2>Sign in</h2>
            <input type="text" onChange={((e) => setSignInEmail(e.target.value))} />
            <input type="password" onChange={((e) => setpasswordSignIn(e.target.value))} />
            <button onClick={()=> signInWithPasswordAction(emailSignIn, passwordSignIn)}>Sign in</button>

        </div>
    )
}