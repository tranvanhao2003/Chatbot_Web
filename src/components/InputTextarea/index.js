import React from 'react';  

const InputComponent = () => {  
    return (  
        <div className="w-[150%] ml-[-100px] h-[150px] mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">  
          <input  
            type="text"  
            placeholder="Ask anything..."  
            className="w-full p-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-none"  
          />  
          <div className="flex justify-between items-center mt-14">  
            <div className="flex items-center">  
              <button className="text-gray-500 hover:text-purple-500">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />  
                </svg>  
              </button>  
              <button className="text-gray-500 hover:text-purple-500 ml-2">  
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />  
                </svg>  
              </button>  
            </div>  
            <div className="flex items-center">  
              
              <label className="relative inline-flex items-center cursor-pointer ml-2">  
                <input type="checkbox" className="sr-only peer" />  
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-300"></div>  
                <span className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-full peer-checked:bg-purple-600"></span>  
              </label>
              <span className="text-gray-500 ml-2 mr-4">Pro</span>    
                <button class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-2 rounded-full flex items-center justify-center">  
                <svg class="w-3 h-3  text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </button>
            </div>  
          </div>  
        </div>  
      );  
};  

export default InputComponent;  