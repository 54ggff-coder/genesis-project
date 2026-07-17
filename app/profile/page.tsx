import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileCard from "@/components/profile/ProfileCard";
import ProfileSkills from "@/components/profile/ProfileSkills";
import ProfileGoals from "@/components/profile/ProfileGoals";

export default function ProfilePage() {

  return (

    <>

      <Navbar />

      <main className="max-w-6xl mx-auto py-16 px-6">

        <ProfileHeader />

        <div className="grid md:grid-cols-2 gap-8 mt-10">

          <ProfileCard />

          <ProfileSkills />

        </div>

        <div className="mt-8">

          <ProfileGoals />

        </div>

      </main>

      <Footer />

    </>

  );

}