import React, {useState} from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from 'react-icons/io';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import Pie from '../components/Charts/Pie'
import LineChart from '../components/Charts/LineCharts'
import SparkLine from '../components/Charts/SparkLine';
import Stacked from '../components/Charts/Stacked';
import Button from '../components/Button'
import { earningData, medicalproBranding, recentTransactions,
   weeklyStats, dropdownData, SparklineAreaData, ecomPieChartData }  from '../data/dummy'
import product9 from '../data/product9.jpg'

const DropDown = ({currentMode}) => (
  <div className='w-28 border-1 border-color px-2 py-1 rounded-md'>
    <DropDownListComponent 
      id="time" fields={{ text: 'Time', value: 'Id' }}  style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }}
      value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" 
    />
  </div>
)


const Ecommerce = () => {
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div 
          className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl 
            w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
            {/*heading*/}
            <div className='flex justify-between items-center'>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$63,448.78</p>
              <button
                type='button'
                style={{backgroundColor: currentColor}}
                className='text-2xl ml-2 opacity-0.9 text-white hover:drop-shadow-xl 
                rounded-full p-4 '
              >
                <BsCurrencyDollar />
              </button>
            </div>
            <div className='mt-6'>
              <Button
                color='white'
                bgColor={currentColor}
                text="Download"
                borderRadius="10px"
              />
            </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div 
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56
                p-4 pt-9 rounded-2xl'
            >
              <button
                type='button'
                style={{color:item.iconColor, backgroundColor: item.iconBg}}
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
              </p>
              <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/*revenue section*/}
      <div className='flex gap-10 flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4
            rounded-2xl md:w-780'
        >
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Updates</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot/>
                </span>
                <span>Expense</span>
              </p>
              <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot/>
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className='mt-10 flex gap-10 flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,338</span>
                  <span 
                    className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full
                       text-white bg-green-400 ml-3 text-xs'
                  >
                    23%
                  </span>
                </p>
                <p className='text-gray-500 mt-1'>Budget</p>
              </div>
              {/*graph sidebar*/}
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>$48,487</p>
                <p className='text-gray-500 mt-1'>Expense</p>
              </div>
              {/*graph*/}
              <div className='mt-5'>
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className='mt-10'>
                <Button 
                  color="white" 
                  bg={currentColor} 
                  text="Download Report" 
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        {/*earnings section */}
        <div>
          <div 
            className='rounded-2xl md:w-400 p-4 m-3'
            style={{backgroundColor:currentColor}}
          >
            <div className='flex justify-between items-center'>
              <p className='font-semibold text-white text-2xl'>Earnings</p>
      
            <div>
              <p className='text-2xl text-white font-semibold mt-8'>$20,330</p>
              <p className='text-gray-200'>Monthly revenue</p>
            </div>
          </div>
            {/*graph*/}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>
          <div 
            className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl
              md:w-400 p-8 m-3 flex justify-center gap-10'
          >
          {/*sales section*/}
            <div>
              <p className='text-2xl font-semibold'>$32,330</p>
              <p className='text-gray-400'>Yearly Sales</p>
            </div>
            <div className='w-40'>
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px"/>
            </div>
          </div>
        </div>       
      </div>
      {/**recent transactiosn*/}
      <div className='flex gap-10 m-4 flex-wrap justify-center'>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl">
            <div className='flex justify-between items-center gap-2'>
              <p className='text-xl font-semibold'>Recent Transactiosn</p>
              <DropDown currentMode={currentMode}/>
            </div>
            <div className='mt-10 w-72 md:w-400'>
              {recentTransactions.map((item) => (
                <div key={item.title} className='flex justify-between mt-4'>
                  <div className="flex gap-4">
                    <button
                      type='button'
                      style = {{color: item.iconColor, backgroundColor: item.iconBg}}
                      className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                    >
                      {item.icon}
                    </button>
                    <div>
                      <p className='text-md font-semibold'>{item.title}</p>
                      <p className='text-sm text-gray-400'>{item.desc}</p>
                    </div>
                  </div>
                  <p className={`text-${item.pcColor}`}>{item.amount}</p>
                </div>
              ))}
            </div>
            {/*new section */}
            <div className='flex justify-between items-center mt5 border-t-1 border-color'>
                <div className='mt-3'>
                  <Button
                    color="white"
                    bgColor={currentColor}
                    text="Add"
                    borderRadius="10px"
                />
                </div>
                <p className='text-gray-400 text-sm'>36 New Transactions</p>
            </div>
        </div>
        {/*sales overview */}
        <div 
          className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6
            rounded-2xl w-96 md:w-760'>
            <div className='flex justify-between items-center gap-2 mb-10'>
                <p className='text-xl font-semibold'>Sales overview</p>
                <DropDown currentMode={currentMode}/>
            </div>
            <div className='md:w-full overflow-auto'>
                <LineChart/>
            </div>
        </div>
      </div>
      {/*weekly stats */}
      <div className='flex flex-wrap justify-center'>
        <div className='md:w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          rounded-2xl p-6 m-3'>
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Weekly Stats</p>
            <button type='button' className='text-xl ml-2 font-semibold text-gray-500'>
                <IoIosMore/>
            </button>
          </div>
          {/*items */}
          <div className='mt-10'>
            {weeklyStats.map((item) => {
              <div key={item.title} className='flex justify-between mt-4 w-full'>
                <div className='flex gap-4'>
                  <button 
                    type='button'
                    style={{background: item.iconBg}}
                    className='text-2xl hover:drop-shadow-xl text-white rounded-full p-3' 
                  >
                    {item.icon}
                  </button>
                  <div>
                    <p className='text-md font-semibold'>{item.title}</p>
                    <p className='text-sm text-gray-400'>{item.desc}</p>
                  </div>
                </div>
                <p className={`text-${item.pcColor}`}>{item.amount}</p>
              </div>
            })}
            {/*graph */}
            <div className='mt-4'>
              <SparkLine currentColor={currentColor} id='area-sparkLine' height='160px' type="Area" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)"/>
            </div>
          </div>
        </div>
        {/*medical pro branding */}
        <div className='w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg
          rounded-2xl p-6 m-3'
        >
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'>Medicalpro Branding</p>
            <button
              type='button'
              className='text-xl ml-2 font-semibold text-gray-400'
            >
              <IoIosMore/>
            </button>
          </div>
          <p 
            className='text-xs cursor-pointer hover:drop-shaow-xl mt-10
              font-semibold rounded-lg w-24 bg-orange-400 py-0.5 px-2 text-gray-200'
          >
          16 APR, 2021
          </p>
          {/*items */}
          <div className='flex gap-4 border-b-1 border-color mt-6'>
            {medicalproBranding.data.map((item) => (
              <div key={item.title} className='border-r-1 border-color pr-4 pb-2'>
                <p className='text-sm text-gray-400'>{item.title}</p>
                <p className='text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
          {/*team section */}
          <div className='border-b-1 border-color pb-4 mt-2'>
            <p className='text-md font-semibold mb-2'>Teams</p>
            <div className='flex gap-4'>
              {medicalproBranding.teams.map((item) => (
                <p
                  key={item.name}
                  style={{background: item.color}}
                  className="cursor-pointer hover:drop-shadow-xl text-white py-0.5 px-3
                    rounded-lg text-xs"
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          {/*leaders */}
          <div className='mt-2'>
            <p className='text-md font-semibold mb-2'>Leaders</p>
            <div className='flex gap-4'>
            {medicalproBranding.leaders.map((item, index) => (
              <img key={index} className='rounded-full w-10 h-10' src={item.image} alt=""/>
            ))}
            </div>
          </div>
          {/* */}
          <div className='flex justify-between items-center mt-5 border-t-1 border-color'>
            <div className='mt-3'>
              <Button
                color="white"
                bgColor={currentColor}
                text="Add"
                borderRadius="10px"
              />
            </div>
            <p className='text-gray-400 text-sm'>36 new Transactions</p>
          </div>
        </div>
        {/*daily activties */}
        <div 
          className='w-400 bg-white dark:text-gray-200 dark:secondary-dark-bg
            rounded-2xl p-6 m-3'
        >
          <div className='flex justify-between'>
            <p className='text-xl font-semibold'> Daily Activites</p>
            <button 
              type='button' 
              className='ml-2 text-xl font-semibold text-gray-500'
            >
              <IoIosMore/>
            </button>
          </div>
          <div className='mt-10'>
              <img className='md:w-96 h-50' src={product9} alt=""/>
              <div className='mt-8'>
                <p className='font-semibold text-lg'>New Product v18 coming soon</p>
                <p className='text-gray-400'>By Kdee Michaels</p>
                <p className='mt-4 text-sm text-gray-400'>
                  Small description of daily activities for the dashboard. nothing more some 
                  boiler plate text. Use for your own devices
                </p>
                <div className='mt-3'>
                  <Button 
                    color="white"
                    bgColor={currentColor}
                    text="Read More"
                    borderRadius="10px"
                  />
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      
      
    )
}

export default Ecommerce