type Props={

question:string;

onAnswer:(score:number)=>void;

};

export default function QuestionCard({

question,

onAnswer,

}:Props){

return(

<div className="border rounded-2xl p-8 mt-8">

<h2 className="text-2xl mb-8">

{question}

</h2>

<div className="grid gap-3">

<button
onClick={()=>onAnswer(1)}
className="border rounded-xl p-3">

Strongly Disagree

</button>

<button
onClick={()=>onAnswer(2)}
className="border rounded-xl p-3">

Disagree

</button>

<button
onClick={()=>onAnswer(3)}
className="border rounded-xl p-3">

Neutral

</button>

<button
onClick={()=>onAnswer(4)}
className="border rounded-xl p-3">

Agree

</button>

<button
onClick={()=>onAnswer(5)}
className="bg-black text-white rounded-xl p-3">

Strongly Agree

</button>

</div>

</div>

);

}