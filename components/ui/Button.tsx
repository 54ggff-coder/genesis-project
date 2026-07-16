"use client";

export default function Button({

children,

onClick,

type="button",

}:{

children:React.ReactNode;

onClick?:()=>void;

type?:"button"|"submit";

}){

return(

<button

type={type}

onClick={onClick}

className="bg-black text-white rounded-xl px-5 py-3 hover:opacity-90 transition"

{children}

);

}