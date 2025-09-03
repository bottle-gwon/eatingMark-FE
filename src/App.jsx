
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './App.css'
import LikeList from './components/LikeList'
import LoadingItem from './components/LoadingItem'
import Restaurant from './components/Restaurant'

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-col items-center justify-around w-dvw h-dvh '>
        <LikeList />
        <Restaurant />
      </div>
    </QueryClientProvider>
  )
}

export default App
