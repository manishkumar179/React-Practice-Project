import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SongProvider } from './MyContext.jsx'

createRoot(document.getElementById('root')).render(
<SongProvider>
  <App/>
</SongProvider>
  
  
)
