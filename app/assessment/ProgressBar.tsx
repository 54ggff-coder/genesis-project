type Props={

current:number;

total:number;

};

export default function ProgressBar({

current,

total,

}:Props){

const percent=(current/total)*100;

return(

<div>

<div className="w-full h-3 bg-gray-200 rounded-full">

<div

className="h-3 bg-black rounded-full"

style={{

width:`${percent}%`

}}

></div>

</div>

<p className="mt-3">

Question {current} of {total}

</p>

</div>

);

}