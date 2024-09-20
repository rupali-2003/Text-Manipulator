import React from 'react'
import Navbar from './Navbar';
import InputOutput from './InputOutput';
const App = () => {
  return (
    <div>
      <Navbar title='TextManipulator' menu='About Us'/>
      <div className='container' style={{textAlign:'center'}}>
      <h1>
        Welcome to Text Manipulator
      </h1>
      <InputOutput/>
      </div>
    </div>
  )
}
export default App;
