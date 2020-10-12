import React from 'react'

import './styles/global.css'

interface TitleProps {
  text: string
}

function Title(props: TitleProps) {
  return <h1>{props.text}</h1>
}

function App() {
  return (
    <div className='App'>
      <Title text='Title 1' />
      <Title text='Title 2' />
      <Title text='Title 3' />
      <Title text='Title 4' />
    </div>
  )
}

export default App
