import AuthGuard from "@/components/auth/AuthGuard";

import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

import Overview from "@/components/dashboard/Overview";

import XPCard from "@/components/dashboard/XPCard";

import LevelCard from "@/components/dashboard/LevelCard";

import RecentActivity from "@/components/dashboard/RecentActivity";

import DailyMission from "@/components/dashboard/DailyMission";

export default function Dashboard(){

return(

<AuthGuard>

<Navbar/>

<main className="max-w-7xl mx-auto py-12 px-6">

<h1 className="text-5xl font-bold mb-10">

Dashboard

</h1>

<Overview/>

<div className="grid md:grid-cols-2 gap-6 mt-8">

<XPCard xp={0}/>

<LevelCard level={1}/>

</div>

<div className="grid md:grid-cols-2 gap-6 mt-8">

<DailyMission/>

<RecentActivity/>

</div>

</main>

<Footer/>

</AuthGuard>

);

}