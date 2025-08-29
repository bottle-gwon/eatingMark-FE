import './App.css'
import LikeList from './components/LikeList'
import Restaurant from './components/Restaurant'

function App() {


  return (
    <div className='flex flex-col items-center justify-around w-dvw h-dvh '>
      <LikeList />
      <Restaurant />
    </div>
  )
}

export default App
