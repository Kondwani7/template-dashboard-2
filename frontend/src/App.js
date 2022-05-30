import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';
import Sidebar from './components/Sidebar';


registerLicense('ORg4AjUWIQA/Gnt2VVhhQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkBhUH5Xc3NQRGFYWEY=')

function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex:'1000'}}>
            <TooltipComponent content="Settings" position="Top">
              <button
               type="button"
               style={{background:"blue" ,borderRadius:'50%'}}
               className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" 
              >
                <FiSettings size="32"/>
              </button>
            </TooltipComponent>
          </div>
          {/*sidebar */}
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar/>
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar/>
            </div>
          )}
          {/*navigation */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
