import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'
import './App.css'
import ThemeContext, { themes } from './theme-context'
import CreateBadgePage from './CreateBadgePage';
import CreatedBadges from './CreatedBadges';
import BadgeDetails from './BadgeDetails';
import NotFound from './NotFound/NotFound';
import Home from './Home';

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
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <Redirect to={`${process.env.PUBLIC_URL}/Home`}/>
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Home`} render={
            ()=>
              <>
                <Header theme={darkTheme} setTheme={setTheme}/>
                <div className="app__page">
                  <Sidebar home={true} createdBadges={false} drafts={false}/>
                  <Home/>
                </div>
              </>
              }>
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Create Badge`} render={
            ()=>
                <CreateBadgePage/>
              }>
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/badge/:badgeId`} render={
            (props)=>
              <BadgeDetails a={props.match.params.badgeId}/>
              } >
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Created Badges`} render={
            ()=>
              <>
                <Header theme={darkTheme} setTheme={setTheme}/>
                <div className="app__page">
                  <Sidebar home={false} createdBadges={true} drafts={false}/>
                  <CreatedBadges title="All your created badges"/>
                </div>
              </>
              }>
          
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/Drafts`} render={
            ()=>
              <>
                <Header theme={darkTheme} setTheme={setTheme}/>
                <div className="app__page">
                  <Sidebar home={false} createdBadges={false} drafts={true}/>
                  <CreatedBadges title="Drafts"/>
                </div>
              </>
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
