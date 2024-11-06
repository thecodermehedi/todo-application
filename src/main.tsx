import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import './index.css'
import Todo from './pages/Todo.tsx'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
  <Provider store={store}>
   <Todo />
  </Provider>
 </StrictMode>,
)
