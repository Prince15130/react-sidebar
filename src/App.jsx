import {useState} from 'react'
import './App.css'
import MainContent from "./components/MainContent.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='h-screen flex bg-[#F3F5F7] px-3 py-4'>
                <MainContent/>
            </div>
        </>
    )
}

export default App
