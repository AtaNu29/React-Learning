import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'John',
    age: 30
  }

  let myArr = [1, 2, 3, 4, 5]

  return (
    <>
      <h1 className='bg-green-400 text-white p-2 rounded-2xl font-bold'>Tailwind Test</h1>
      <Card src='https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg' userName='Atanu Mondal' cardValue= {345}/>
      <Card src='https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif' userName='Pinaki Mukharjee' price = {100} cardValue= {221}/>
    </>
  )
}

export default App
