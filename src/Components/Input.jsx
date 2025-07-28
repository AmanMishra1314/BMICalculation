import React, { useEffect, useState } from 'react'

function Input() {
    const [weight,setWeight]=useState('');
    const [height,setHeight]=useState('');
    const [bmi,setBMI]=useState('');
    const [status,setStatus]=useState("");
    const HandleCalculation = ()=>{
        let Cal=weight/(height*height);
        setBMI(Cal)
        if(Cal<18.5)
        {
            setStatus("Underweight")
        }
        else if(Cal>=18.5 && Cal<=24.9)
        {
            setStatus("Normal")

        }
        else if(Cal>=25 && Cal<=29.9)
        {
            setStatus("OverWeight")

        }
        else{
            setStatus("Obese")
        }

    };
    
  return (
    <>
   
    <div className='bg-white w-full h-auto rounded-lg shadow-2xl'>
        <div>
            <u>
         <h1 className='text-3xl text-black italic'>BMI Calculator</h1>
         </u>
         </div>
      <label htmlFor="weight" className='text-center text-black'>Weight(Kg)</label> <br/>
      <input type="number"
      value={weight}
      onChange={(e)=>setWeight(e.target.value)}
      placeholder='Enter your weight' id='weight' className='h-10 w-72' /><br /><br />

       <label htmlFor="height" className='text-center text-black'>Height(m)</label> <br/>
      <input type="number"
      value={height}
      onChange={(e)=>setHeight(e.target.value)}
      placeholder='Enter your height' id='height' className='h-10 w-72' /><br /><br />
      <button onClick={HandleCalculation} className='bg-blue-700 text-white'>Calculate</button><br />

      <p className='text-black italic'>Your BMI:{bmi}</p><br />
      <p className='text-black italic'>Status:{status}</p>
      
    </div>
    </>
  )
}

export default Input
