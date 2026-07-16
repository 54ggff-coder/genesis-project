import { supabase } from "./supabase";

export async function getProfile(){

const {

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