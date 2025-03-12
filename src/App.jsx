import DefaultLayout from './layout/DefaultLayout'

import HomePage from './pages/HomePage'
import MoviePage from './pages/MoviePage'
import NotFoundPage from './pages/NotFoundPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/movies/:id' element={<MoviePage />} />
            <Route path='*' element={<NotFoundPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
