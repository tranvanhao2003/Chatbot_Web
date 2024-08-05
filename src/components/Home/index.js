import React from 'react';
import InputComponent from '../InputTextarea';
const Home = () => {
    return (
        <> 
           <div className='flex-col mx-auto mt-[20%]'>
                 <div className='mb-10 text-center w-full'>
                    <h1 className='font-regular font-display text-3xl md:text-4xl'> Where knowledge begins</h1>
                </div>

                <InputComponent />

                
                
           </div>
          
           

           
           
        </>
    );
};

export default Home;