import React from 'react'
// import HelloWorld from './components/HelloWorld'
// import ReduxDemo from './components/ReduxDemo'
import { Provider } from 'react-redux'
import { store } from '../state/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routePages } from './route-pages'
import loadable from '@loadable/component'
import LoadingPage from '../components/LoadingPage'
import MainPageLayout from './MainPageLayout'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainPageLayout hasHeader={true}>
          <Routes>
            {routePages.map((item) => {
              const Comp = loadable(item.component, {
                fallback: <LoadingPage />,
              })
              return (
                <Route path={item.path} key={item.title} element={<Comp />} />
              )
            })}
          </Routes>
        </MainPageLayout>
      </Router>
    </Provider>
  )
}

export default App
