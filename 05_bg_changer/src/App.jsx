import { useState } from 'react'

function App() {
  const [color, setColor] = useState('grey');

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shado-lg bg-white px-4 py-2 b-r rounded-2xl'>

          <button
          onClick={() => setColor('red')}
          className='outline-none w-25 px-4 py-1 cursor-pointer rounded-full text-white shadow-lg' style={{backgroundColor: 'red'}}
          >Red</button>

          <button
          onClick={() => setColor('green')}
          className='outline-none w-25 px-4 py-1 cursor-pointer rounded-full text-white shadow-lg' style={{backgroundColor: 'green'}}>Green</button>

          <button
          onClick={() => setColor('blue')}
          className='outline-none w-25 px-4 py-1 cursor-pointer rounded-full text-white shadow-lg' style={{backgroundColor: 'blue'}}>Blue</button>

          <button
          onClick={() => setColor('purple')}
          className='outline-none w-25 px-4 py-1 cursor-pointer rounded-full text-white shadow-lg' style={{backgroundColor: 'purple'}}>Purple</button>

          <button
          onClick={() => setColor('#212121')}
          className='outline-none w-25  px-4 py-1 cursor-pointer rounded-full text-white shadow-lg' style={{backgroundColor: '#212121'}}>Dark</button>

        </div>
      </div>
    </div>
  )
}

export default App
