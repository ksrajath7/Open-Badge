import React from 'react';
import Header from './Header'
// import Sidebar from './Sidebar';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './App.css'
import ThemeContext, { themes } from './theme-context'
import CreateBadgePage from './CreateBadgePage';
import BadgeDetails from './BadgeDetails';
import NotFound from './NotFound/NotFound';

function App() {

  console.log("hi from App")
  
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
            ()=>
              <CreateBadgePage/>
              }>
            
            </Route>

          <Route path={`${process.env.PUBLIC_URL}/badge/:badgeId`} render={
            (props)=>
              <BadgeDetails a={props.match.params.badgeId}/>
              } >
          
          </Route>
          
          <Route path={`${process.env.PUBLIC_URL}/Create Badge`} render={
            ()=>
              <CreateBadgePage/>
              }>
          
          </Route>



            <NotFound/>




            
        </Switch>
      </BrowserRouter>
      
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
