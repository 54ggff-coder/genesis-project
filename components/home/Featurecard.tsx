export default function FeatureCard({

title,

description,

}:{

title:string;

description:string;

}){

return(

<div className="border rounded-2xl p-6">

<h2 className="text-xl font-semibold">

{title}

</h2>

<p className="mt-3 text-gray-600">

{description}

</p>

</div>

);

}