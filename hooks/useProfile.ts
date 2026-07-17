"use client";

import { useEffect,useState } from "react";

import { getProfile } from "@/lib/profile";

export function useProfile(){

const[profile,setProfile]=

useState<any>(null);

useEffect(()=>{

getProfile().then((res)=>{

setProfile(res.data);

});

},[]);

return{

profile

};

}