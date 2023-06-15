import React , {useState} from 'react';
import './Bmi.css'

function Bmi() {
   // state
   let [weight, setWeight] = useState(0);
   let [height, setHeight] = useState(0);
   let [bmi, setBmi] = useState('');
   let [message, setMessage] = useState('');
 
 
 
   let calcBmi = (event) => {
     //prevent submitting
     event.preventDefault()
 
     if (weight === 0 || height === 0) {
       alert('Please enter a valid weight and height respectively')
     } else {
       let bmi = (weight / (height * height) )
       setBmi(bmi.toFixed(1))
 
       // Logic for message
 
       if (bmi < 18.5) {
         setMessage('You are underweight 🤔️')
       } else if (bmi >= 18.5 && bmi < 24.9) {
         setMessage('You are a good weight 🤨️')
       } 
       else if (bmi >=25 && bmi < 30){
       setMessage('You are overweight 😏️ ')
       }
       else {
         setMessage('You are in obesity 😏️')
       }
     }
   }
 
   //  show image based on bmi calculation
   let imgSrc;
 
   if (bmi < 1) {
     imgSrc = null
   } else {
     if(bmi < 18.5) {
       imgSrc = require('../assets/size/underweight.png')
     } else if (bmi >= 18.5 && bmi < 24.9) {
       imgSrc = require('../assets/size/healthy.png')
     } else if (bmi >= 24.9 && bmi < 30) {
      imgSrc = require('../assets/size/overweight.png')
     }else {
       imgSrc = require('../assets/size/overweight.png')
     }
   }
 
 
   let reload = () => {
     window.location.reload()
   }
 
   return (
     <div className="app">
       <div className='container'>
         <h2 className='center'>BMI Calculator</h2>
         <form onSubmit={calcBmi}>
           <div>
             <label>Weight (Kilo-gram)</label>
             <input value={weight} onChange={(e) => setWeight(e.target.value)} type='number'/>
           </div>
           <div>
             <label>Height (Meter)</label>
             <input value={height} onChange={(event) => setHeight(event.target.value)} type='number'/>
           </div>
           <div>
             <button className='btn' type='submit'>Submit</button>
             <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
           </div>
         </form>
 
         <div className='center'>
           <h3>Your BMI is: {bmi}</h3>
           <p>{message}</p>
         </div>
 
         <div className='img-container'>
           <img src={imgSrc} alt=''></img>
         </div>
       </div>
     </div>
   );
}

export default Bmi;