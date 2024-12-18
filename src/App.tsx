import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        alert('ok');
    })

    return (
        <div>
            <a href="https://httpbin.org/anything">https://httpbin.org/anything</a>
        </div>
    )
}

export default App
