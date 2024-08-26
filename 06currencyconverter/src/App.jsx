import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { InputBox } from './components'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState ('usd')
  const [to, setTo] = useState ('kes')
  const [convertedAmount, setConvertedAmount ] = useState (0)

   const currencyInfo = useCurrencyInfo(from)
   //const options = Object.keys(currencyInfo)

   const convert = () => {
    setConvertedAmount (amount*currencyInfo[to])
   }
 
   const swap = () => {
    setFrom[to]
    setTo[from]
    setConvertedAmount(amount)
    setAmount(convertedAmount)
   }

  return (
    <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat' 
    style={{backgroundImage: 'url(https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60
        rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox 
            label = 'from'
            amount={amount}
            //currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            OnAmountChange = {(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
            <input type="text" />
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default App
