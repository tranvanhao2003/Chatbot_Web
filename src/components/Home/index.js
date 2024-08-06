// import React from 'react';
// import InputComponent from '../InputTextarea';
// const Home = () => {
//     return (
//         <> 
//            <div className='flex-col mx-auto mt-[20%]'>
//                  <div className='mb-10 text-center w-full'>
//                     <h1 className='font-regular font-display text-3xl md:text-4xl'> Where knowledge begins</h1>
//                 </div>
//                 <InputComponent />
//                 <div class="font-regular font-display grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <a class="block text-left">🍋: Health benefits of lemon water</a>
//                 <a class="block text-left">🪗: Are accordions French?</a>
//                 <a class="block text-left">🚀: Who are the Guardians of the Galaxy?</a>
//                 <a class="block text-left">⚽: Who are the best soccer players of all time</a>
//                 </div>
//            </div>
//         </>
//     );
// };

// export default Home;

import React from 'react';
import InputComponent from '../InputTextarea'; 

const Home = () => {
    return (
        <div className='max-w-4xl mx-auto mt-16 px-4'>
            <h1 className='text-4xl text-center font-semibold mb-10'>Where knowledge begins</h1>
            <InputComponent />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                <a href="#!" className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-blue-100 transition-all duration-300 ease-in-out'>
                    🍋  <span className='ml-2 flex-1'>Health benefits of lemon water</span>
                </a>
                <a href="#!" className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-blue-100 transition-all duration-300 ease-in-out'>
                    🪗 <span className='ml-2 flex-1'>Are accordions French?</span>
                </a>
                <a href="#!" className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-blue-100 transition-all duration-300 ease-in-out'>
                    🚀 <span className='ml-2 flex-1'>Who are the Guardians of the Galaxy?</span>
                </a>
                <a href="#!" className='flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow hover:bg-blue-100 transition-all duration-300 ease-in-out'>
                    ⚽ <span className='ml-2 flex-1'>Who are the best soccer players of all time</span>
                </a>
            </div>
        </div>
    );
};

export default Home;