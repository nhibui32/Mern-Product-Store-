
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from './components/ui/provider' // ← this already wraps ChakraProvider
import { Toaster } from './components/ui/toaster'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <App />
        <Toaster /> {/* ✅ Must be rendered inside Provider so it works */}
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)


