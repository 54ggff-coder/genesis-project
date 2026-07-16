"use client";

export default function Input({

placeholder,

type="text",

value,

onChange,

}:{

placeholder:string;

type?:string;

value:string;

onChange:(e:any)=>void;

}){

return(

<input

className="w-full border rounded-xl p-3"

placeholder={placeholder}

type={type}

value={value}

onChange={onChange}

/>

);

}