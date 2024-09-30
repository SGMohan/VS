import { useState } from 'react'

const Counters = () => {
    const [count, setCount] = useState(0);
    return (
     <div className="container mx-auto h-screen">
      <nav className="flex items-center justify-center flex-col flex-nowrap p-8 m-2 h-32 border-b-2 border-green-500 shadow-md bg-yellow-50 ">
          <span className="text-5xl font-bold">{count}</span>
          <div>
              <button
                  type="button"
                  className="border-2 border-black p-4 rounded m-4 bg-white"
                  onClick={() => {
                      setCount(count - 1)
                      console.log(count)
                  }}>
                  Decrement
              </button>
               <button
                  type="button"
                  className="border-2 border-black p-4 rounded m-4 bg-white"
                  onClick={() => {
                      setCount(count + 1)
                      console.log(count)
                  }}>
                  Increment
                  </button>
          </div>
            </nav>
            </div>
  )
}

export default Counters