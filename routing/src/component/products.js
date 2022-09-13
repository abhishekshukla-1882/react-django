import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
const Products = () => {
const [test, setTest] = useState(['Waiting']);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/testing/', {
          method: "GET"
        })
        .then(resp => resp.json())
        .then(data => {
          console.log('data',data)
          setTest(data)
          console.log('length',test[0].length)  
        })
        .catch(error => console.log("Error is : ", error))
    }, [])
    function check (){
        fetch("http://127.0.0.1:8000/").then(response => response.json()).then(response => {
            if (response) {
                 console.log('yhi');
                 console.log('aya',response);
            //     setTest([...response]);
            // fetch(response['testing']).then(response => response.json()).then(response=>{
            //     console.log(response)
            // })
                 // console.log(test)
              
             }
        });    
    }
  const animals = [
    {id: 1, animal: "Dog" , type:"ani"},
    {id: 2, animal: "Bird" , type:"ani"},
    {id: 3, animal: "Cat" , type:"ani"},
    {id: 4, animal: "Mouse" , type:"ani"},
    {id: 5, animal: "Horse", type:"ani"}
  ];

    console.log("gfgfgfgf");
 
    return (
     <>
      {/* <ul> */}
      {/* {animals.map((animal) => (

      animal.map((ids)=>(
        {animal.ids}
      ))        
      ))} */}

      <div className='row'>
      {test.map((event )=>{
        console.log("check111",event.name ,'=>', event.designation );
        return(
          <>
          <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src={event.imagess}  alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{event.name}</h5>
              <p className="card-text">
              {event.designation}
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>

          {/* {event.name} ===> {event.designation} <br /> <img src=alt="Girl in a jacket" width="200" height="300" /> */}
          
          <br />
          </>
        )
        // {event.name}
        // Object.keys(event).map((extra)=>{
        //   Object.keys(extra).map((data)=>{
        //     console.log("check333",);
        //   })
        // })
      })}
     </div>
    {/* </ul> */}

      </>  
         );
}
export default Products
 



 {/* {renderData} */}
        {/* {test.length>0 && test?.map((d, idx)=>{
                let keys = Object.keys(d);
                console.log("keys",keys)
                return <>
                    {
                        keys.map((k)=>{
                            console.log("keys_second",d[k])
                            return <>
                            
                            {d[k]} <br />

                            </>
                    })

        }
                </>
        })} */}

   // const [test, setTest] = useState(['Waiting']);
    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/testing/', {
    //       method: "GET"
    //     })
    //     .then(resp => resp.json())
    //     .then(data => {
    //       console.log('data',data)
    //       setTest([data])
    //       console.log('length',test[0].length)  
    //     })
    //     .catch(error => console.log("Error is : ", error))
    // }, [])
    // function check (){
    //     fetch("http://127.0.0.1:8000/").then(response => response.json()).then(response => {
    //         if (response) {
    //              console.log('yhi');
    //              console.log('aya',response);
    //         //     setTest([...response]);
    //         // fetch(response['testing']).then(response => response.json()).then(response=>{
    //         //     console.log(response)
    //         // })
    //              // console.log(test)
              
    //          }
    //         // console.log(response);
    //     });    
    // }
    // useEffect(()=>{
    //     check();
    // },[]);

    // useEffect(()=>{
    //     console.log("printing test :",test);
    // },[test]);

    // const renderData = ({item, index}) => {
    //     return(
    //       <>
    //       {test.name}
    //       </>
    //     ) 
    //   } tensech.c