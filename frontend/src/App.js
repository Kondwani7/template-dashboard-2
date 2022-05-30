import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {FiSettings} from 'react-icons/fi';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import { registerLicense } from '@syncfusion/ej2-base';
{/*components */}
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import ThemeSettings from './components/ThemeSettings'
{/*pages */}
import Ecommerce from './pages/Ecommerce';
import Orders from './pages/Orders';
import Employees from './pages/Employees'
import Kanban from './pages/Kanban';
import ColorPicker from './pages/ColorPicker';
import Calendar from './pages/Calendar';
import Customers from './pages/Customers';
import Editor from './pages/Editor';
import Line from './pages/Charts/Line';
import Bar from './pages/Charts/Bar';
import Area from './pages/Charts/Area';
import Pie from './pages/Charts/Pie';
import Financial from './pages/Charts/Financial';
import ColorMapping from './pages/Charts/ColorMapping';
import Pyramid from './pages/Charts/Pyramid';
import Stacked from './pages/Charts/Stacked';

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
          {/*navigation bar*/}
          <div
            className={
              activeMenu 
              ? 'dark:bg-main-dark-bg bg-main-bg min-h-screen md:ml-72 w-full' 
              : 'bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2'
            }
          >
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar/>
            </div>
            {/*routing */}
            <div>
              <Routes>
                {/*dashboard home*/}
                <Route path="/" element={(<Ecommerce/>)}/>
                <Route path="/ecommerce" element={(<Ecommerce/>)} />
                {/**pages */}
                <Route path="/orders" element={(<Orders/>)} />
                <Route path="/employees" element={(<Employees/>)} />
                <Route path="/customers" element={(<Customers/>)} />
                {/**apps */}
                <Route path="/kanban" element={(<Kanban/>)} />
                <Route path="/editor" element={(<Editor/>)} />
                <Route path="/calendar" element={(<Calendar/>)} />
                <Route path="/colorpicker" element={(<ColorPicker/>)} />
                {/*charts*/}
                <Route path="/line" element={(<Line/>)} />
                <Route path="/area" element={(<Area/>)} />
                <Route path="/bar" element={(<Bar/>)} />
                <Route path="/pie" element={(<Pie/>)} />
                <Route path="/financial" element={(<Financial/>)} />
                <Route path="/colormapping" element={(<ColorMapping/>)} />
                <Route path="/pyramid" element={(<Pyramid/>)} />
                <Route path="/stacked" element={(<Stacked/>)} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
