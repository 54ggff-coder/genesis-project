type Skill = {

name: string;

score: number;

};

export default function SkillChart({

skills,

}:{

skills: Skill[];

}){

return(

<div className="rounded-2xl border p-6">

<h2 className="text-2xl font-bold mb-6">

Top Skills

</h2>

<div className="space-y-4">

{skills.map((skill)=>(

<div key={skill.name}>

<div className="flex justify-between">

<span>{skill.name}</span>

<span>{skill.score}%</span>

</div>

<div className="w-full h-3 bg-gray-200 rounded-full mt-2">

<div

className="h-3 rounded-full bg-black"

style={{

width:`${skill.score}%`

}}

></div>

</div>

</div>

))}

</div>

</div>

);

}