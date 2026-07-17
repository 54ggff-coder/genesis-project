import { supabase } from "./supabase";

export async function getProfile(){

const{

data,

error

}=await supabase

.from("profiles")

.select("*")

.single();

return{

data,

error

};

}

export async function updateProfile(

values:any

){

return await supabase

.from("profiles")

.update(values)

.eq("id",values.id);

}