import React from 'react';
import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Footer from "./ui/Footer";
import LandingPage from './ui/LandingPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <LandingPage />}></Route>
          {/* <Route exact path="/services" component={()=><div>Services</div>}></Route> */}
          <Route exact path="/contact" component={() => <div style={{ "height": "2000px" }}>Contact</div>}></Route>
          <Route exact path="/services" component={() => <div style={{ "height": "2000px" }}>Services</div>}></Route>
          <Route exact path="/about" component={() => <div style={{ "height": "2000px" }}>About</div>}></Route>
          <Route exact path="/ai" component={() => <div style={{ "height": "2000px" }}>Artificial Intelligence</div>}></Route>
          <Route exact path="/ml" component={() => <div style={{ "height": "2000px" }}>Machine Learning</div>}></Route>
          <Route exact path="/gd" component={() => <div style={{ "height": "2000px" }}>Graphic Design</div>}></Route>
        </Switch>
        
        <Footer />
      </BrowserRouter>

      {/* {[...new Array(120)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
        )
        .join('\n')} */}

    </ThemeProvider>
  );
}

export default App;
