import React from 'react'
import ThemeContext from './theme-context'
import './CreateBadge.css'
import Shields from './ModelBox/Shields'
import Toolbox from './Toolbox/Toolbox'
import IconModels from './ModelBox/IconModels'
import TextField from './ModelBox/TextField'

function CreateBadge() {
    const themes = React.useContext(ThemeContext)
    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 620

    const [shield, setShield] = React.useState(true)
    const [iconModel, setIconModel] = React.useState(false)
    const [text, setText] = React.useState(false)
    const [textCover, setTextCover] = React.useState(false)

    const [shieldSource, setShieldSource] = React.useState('')
    const [iconModelSource, setIconModelSource] = React.useState('')
    const [textInput, setTextInput] = React.useState('')

    let toolBoxStyle = {backgroundColor:themes.background, color:themes.color}
    let modelBoxClass = "createBadge__modelBox"
    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);

      if(width<=breakpoint){
          toolBoxStyle = {backgroundColor:themes.background, flex:"0.2", color:themes.color}
          modelBoxClass = "createBadge__modelBox__mobileView"
      }
    return (
        <div className="createBadge"  style={{backgroundColor:themes.sectionBackground}}>
            <div style={{flex:'1'}}>

                <h2 class="createBadge__title" style={{color:themes.color}}>Create Badge
                                                                        
                                                                        </h2>
                <hr className="createBadge__hr" style={{backgroundColor:themes.searchBarBorder}}/>
                <div style={{ background:"red"}}>
                <center>

                    <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display:"inline-block", margin:"auto"}}>
                        <path d={shieldSource} fill="#DF2F8E"/>
                        <path d={shieldSource} fill="#DF2F8E"/>
                        <path d={iconModelSource} fill="#333"/>
                    </svg>
                    <h2>{textInput}</h2>
                </center>

                </div>

            </div>

            <div className="spacing"></div>

            <div className={modelBoxClass} style={{backgroundColor:themes.background, color:themes.color}}>

                { shield &&
                <Shields setShieldSource={setShieldSource} />
                }
                { iconModel &&
                <IconModels setIconModelSource={setIconModelSource} />
                }
                { text &&
                <TextField textInput={textInput} setTextInput={setTextInput} themes={themes} />
                }

            </div>

            <div className="createBadge__toolBox" style={toolBoxStyle}>
                <Toolbox setShield={setShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} />
            </div>

        </div>
    )
}

export default CreateBadge
