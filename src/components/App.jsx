import Header from "./ui/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./ui/theme";
import { BrowserRouter, Route, Switch } from "react-router-dom"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={()=><div>Home</div>}></Route>
          {/* <Route exact path="/services" component={()=><div>Services</div>}></Route> */}
          <Route exact path="/contact" component={()=><div>Contact</div>}></Route>
          <Route exact path="/cources" component={()=><div>Cources</div>}></Route>
          <Route exact path="/about" component={()=><div>About</div>}></Route>
          <Route exact path="/pythondev" component={()=><div>Python Development</div>}></Route>
          <Route exact path="/webdev" component={()=><div>Web Development</div>}></Route>
          <Route exact path="/gamedev" component={()=><div>Game Development</div>}></Route>
        </Switch>
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
