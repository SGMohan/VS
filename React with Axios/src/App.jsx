import React, { useEffect, useReducer } from 'react'
const todoReducer = (state, action) => {
  switch (action.type) {
   case "ADD"
 }
}
const App = () => {
  const [todo, dispatch] = useReducer(todoReducer, [])
  useEffect(() => {
    async function fetchData(params) {
      const response
      
    }
  })


  return (
    <div key={todo.id}>
      <p>
        todo.taskname
      </p>
    </div>
  )
}

export default App