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
      {/*new sectionh */}
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
            </div>
      </div>
    </div>
  )
}

export default Ecommerce