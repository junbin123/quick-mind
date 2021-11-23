import React from 'react'
// import HelloWorld from './components/HelloWorld'
// import ReduxDemo from './components/ReduxDemo'
import HeaderBar from './components/HeaderBar'
import { Provider } from 'react-redux'
import { store } from './state/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import {}
{
  /* <HeaderBar /> */
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* <Route path="/" element={<HeaderBar />}/>
          <Route path="/home" element={<HeaderBar />}/> */}
          <Route path="/about" element={<HeaderBar />} />
          <Route path="/login" />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
