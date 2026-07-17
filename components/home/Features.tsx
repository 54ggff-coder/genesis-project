import FeatureCard from "./FeatureCard";

export default function Features(){

return(

<section className="py-20">

<div className="max-w-6xl mx-auto px-6">

<h2 className="text-4xl font-bold mb-10">

Features

</h2>

<div className="grid md:grid-cols-3 gap-6">

<FeatureCard

title="Hidden Skills"

description="Discover talents you never knew."

/>

<FeatureCard

title="Career Paths"

description="Find careers matching your abilities."

/>

<FeatureCard

title="Growth Plan"

description="Receive personalized development plans."

/>

</div>

</div>

</section>

);

}