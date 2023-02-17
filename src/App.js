import React from 'react';
//import pages
//here we have imported 4 pages that we built ...
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//Global Style
//these global styles built using styled components,they are imprted here...
import GlobalStyle from './components/GlobalStyle';
//import nav(navigation bar imported)
import Nav from './components/Nav';
//import from route
import {Switch, Route, useLocation} from 'react-router-dom';
//Framer Motion
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  console.log(location);
  return (
      <div className="App">
        {/* here is our styled global compoennt */}
        <GlobalStyle />
        {/* this is navigation  bar that we imported */}
        <Nav />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>

              <Route exact path="/">
                <AboutUs />
              </Route>

              <Route exact path="/work">
                <OurWork />
              </Route>

              <Route path="/work/:id">
                <MovieDetail />
              </Route>

              <Route>
                <ContactUs path="/contact"/>
              </Route>

            </Switch>
          </AnimatePresence>
      </div>

  );
};
//we exported our default app and will recieve in index.js
export default App;
