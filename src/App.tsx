import React from 'react'
// import HelloWorld from './components/HelloWorld'
import ReduxDemo from './components/ReduxDemo'
import HeaderBar from './components/HeaderBar'
import { Provider } from 'react-redux'
import { store } from './state/index'

function App() {
  return (
    <div className="App">
      <HeaderBar />
      123
      <Provider store={store}>
        <ReduxDemo />
      </Provider>
      {/* <HelloWorld /> */}
    </div>
  )
}

export default App
