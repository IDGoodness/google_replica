import './index.css'
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';

function App() {

  return (
    <>
      <Navbar />
      <h1 className='p-14 font-sans text-8xl text-center'>
        Google
      </h1>

      <SearchBox />

      <div className="p-5 text-center">
        <button className='bg-slate-50 mx-5 rounded-sm p-3 py-2'>Google Search</button>
        <button className='mx-5 bg-slate-50 rounded-sm p-3 py-2'>I&apos;m Feeling Lucky</button>
      </div>

      <div className="text-center">
        Google offered in: <a href="#" className='px-2 text-blue-800 underline'>Hausa</a> <a href="#" className='px-2 text-blue-800 underline'>Igbo</a> <a href="#" className='px-2 text-blue-800 underline'>Ede Yoruba</a> <a href="#" className='text-blue-800 underline px-2'>Nigerian Pidgin</a>
      </div>
      
    </>
  )
}

export default App
