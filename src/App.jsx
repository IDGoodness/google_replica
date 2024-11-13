import './index.css'
import Navbar from './Components/Navbar';
import SearchBox from './Components/SearchBox';

function App() {

  return (
    <>
      <Navbar />
      <h1 className='p-4 md:p-14 font-sans text-4xl md:text-8xl text-center'>
        Google
        {/* <sub className='text-lg -mx-5'>inc</sub> */}
      </h1>

      <SearchBox />

      <div className="p-2 md:p-5 text-center">
        <button className='bg-slate-50 mx-2 md:mx-5 rounded-sm p-2 md:p-3 py-1 md:py-2'>Google Search</button>
        <button className='mx-2 md:mx-5 bg-slate-50 rounded-sm p-2 md:p-3 py-1 md:py-2'>I&apos;m Feeling Lucky</button>
      </div>

      <div className="text-center p-2 md:p-5">
        Google offered in: <a href="#" className='px-1 md:px-2 text-blue-800 underline'>Hausa</a> <a href="#" className='px-1 md:px-2 text-blue-800 underline'>Igbo</a> <a href="#" className='px-1 md:px-2 text-blue-800 underline'>Ede Yoruba</a> <a href="#" className='text-blue-800 underline px-1 md:px-2'>Nigerian Pidgin</a>
      </div>
      
    </>
  )
}

export default App
