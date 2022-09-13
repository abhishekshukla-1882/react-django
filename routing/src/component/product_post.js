import React,{useState} from 'react'

import {Form, FormLayout, Checkbox, TextField, Button} from '@shopify/polaris';
export default function product_post() {
  // const [newsletter, setNewsletter] = useState(false);
  // const [newsletter , setNewsletter] = useState(false);
  // const [newsletter, setNewslettter] = useState('')
  // const [email, setEmail] = useState('');
  // const [email, setEmail] = useState('');

  const handleSubmit = (e)=>{
    console.log(e.value);
  }

  return (
 
    <>
    <div className="">
  <div className="Polaris-Labelled__LabelWrapper">
    <div className="Polaris-Label">
      <label
        id="PolarisTextField1Label"
        htmlFor="PolarisTextField1"
        className="Polaris-Label__Text"
      >
        Store name
      </label>
    </div>
  </div>
  <div className="Polaris-Connected">
    <div className="Polaris-Connected__Item Polaris-Connected__Item--primary">
      <div className="Polaris-TextField Polaris-TextField--hasValue">
        <input
          type="text"
          id="PolarisTextField1"
          defaultValue="Jaded Pixel"
          autoComplete="off"
          className="Polaris-TextField__Input"
          aria-labelledby="PolarisTextField1Label"
          aria-invalid="false"
        />
        <div className="Polaris-TextField__Backdrop"></div>
      </div>
    </div>
  </div>
</div>

    </>
        // <Form>
        //   <TextField 
        //    label="Store name"
        //    value={handleSubmit}
        //    onChange={handleSubmit}
        //    autoComplete="off"
        //   />
        // </Form>
   
  )
}
