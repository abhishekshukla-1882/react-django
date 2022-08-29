import React,{useState} from 'react'

const Home = () => {
  
  const [test,setTest] = useState('Waiting');
  
 
  fetch("http://127.0.0.1:8000/").then(response=>response.json()).then(response => {
          if (response) {
              console.log('yhi');
              console.log('aya',response);
              setTest([response])
          }
        
      }).catch(err => console.error(err));
  
      return (
    <div>
       {setTest}
    </div>)
  
}

export default Home