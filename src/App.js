import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import SearchPage from './SearchPage';
import ThemeContext, { themes } from './theme-context'
import CreateBadge from './CreateBadge';

function App() {
  
  let themeValue = themes.light
  const [darkTheme, setTheme] = React.useState(false)
  if(darkTheme){
    themeValue = themes.dark
  }
  else{
    themeValue = themes.light
  }
  
  return (

      <ThemeContext.Provider value={themeValue}>

    <div className="app" style={{backgroundColor:themeValue.background}}>
      <BrowserRouter>
        <Header theme={darkTheme} setTheme={setTheme}/>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <Sidebar createBadge={true}/>
              <CreateBadge/>
          </div>}>
            
            </Route>
          
          <Route path={`${process.env.PUBLIC_URL}/search/:searchTerm`} render={
            (props)=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <Sidebar/>
              <SearchPage a={props.match.params.searchTerm}/></div>} >
          
          </Route>
          
          <Route path={`${process.env.PUBLIC_URL}/Create Badge`} render={
            ()=><div className="app__page"   style={{backgroundColor:themeValue.background}}>
              <Sidebar createBadge={true}/>
              <CreateBadge/>
              </div>} >
          
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
