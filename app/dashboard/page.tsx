import AuthGuard from "@/components/auth/AuthGuard";

export default function Dashboard(){

return(

<AuthGuard>

<div className="max-w-6xl mx-auto py-20">

<h1 className="text-5xl font-bold">

Dashboard

</h1>

<p className="mt-6">

Welcome to Project Genesis.

</p>

</div>

</AuthGuard>

);

}