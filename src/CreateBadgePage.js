import React from 'react'
import ThemeContext from './theme-context'
import Presets from './Presets/Presets'
import Toolbox from './Toolbox/Toolbox'
import IconModels from './ModelBox/IconModels'
import TextField from './ModelBox/TextField'
import Colors from './ModelBox/Colors'
import Paths from './ModelBox/Paths/Paths'
import './CreateBadgePage.css'
import { Link } from 'react-router-dom'
import InnerShields from './ModelBox/InnerShields'

function CreateBadgePage() {

    const themes = React.useContext(ThemeContext)
    const [badgeId] = React.useState('123456')

    const [editPreset, setEditPreset] = React.useState(false)

    const [innerShield, setInnerShield] = React.useState(true)
    const [iconModel, setIconModel] = React.useState(false)
    const [text, setText] = React.useState(false)
    const [colors, setColors] = React.useState(false)
    const [textCover, setTextCover] = React.useState(false)
    const [presetVisible, setPresetVisible] = React.useState(true)

    const [shieldSource, setShieldSource] = React.useState('')
    const [innerSource, setInnerSource] = React.useState('')
    const [iconModelSource, setIconModelSource] = React.useState('')
    const [textInputSource, setTextInputSource] = React.useState('')
    const [textCoverSource, setTextCoverSource] = React.useState('')
    
    const [shieldColor, setShieldColor] = React.useState('#8200ff')
    const [innerColor, setInnerColor] = React.useState('#5200ff')
    const [iconModelColor, setIconModelColor] = React.useState('#fff')
    const [textInputColor, setTextInputColor] = React.useState('red')
    // const [textCoverColor, setTextCoverColor] = React.useState('')

    const [translateIconModel, setTranslateIconModel] = React.useState()
    const [translateShield, setTranslateShield] = React.useState()
    const [translateInner, setTranslateInner] = React.useState()

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 800

    React.useEffect(() => {
        
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    
      }, []);
      
      let createStyle = {backgroundColor:themes.sectionBackground, flex:"0.8"}
      let editButtonStyle = {backgroundColor:themes.header}
      let detailsInputClassName = "badgeName"
      let svg = "322"

      if(width<=breakpoint){
          createStyle.flex="1"
          detailsInputClassName = "badgeName__mobileView"
          svg = "auto"
      }
      if(editPreset && width>breakpoint){
          editButtonStyle.display="none"
          createStyle.flex="0.6"
      }

    return (
        <div className="createBadgePage">
            
            { width>breakpoint &&
            <div className="presetTab" style={{backgroundColor:themes.background, color:themes.color}}>
                <div className="presetLabel" >
                    Edit Presets
                </div>
                <div className="presets">
                    <Presets themes={themes} setEditPreset={setEditPreset} setShieldColor={setShieldColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setShieldSource={setShieldSource} setInnerSource={setInnerSource} setIconModelSource={setIconModelSource} setTranslateShield={setTranslateShield} setTranslateInner={setTranslateInner} setTranslateIconModel={setTranslateIconModel}></Presets>
                </div>
                <hr style={{backgroundColor:themes.searchBarBorder}}/>
            </div>
            }

            <div className="create" style={createStyle}>



                { width<=breakpoint &&
                <div className="presetTab__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="presetLabel__mobileView" onClick={()=>{
                        setPresetVisible(!presetVisible)
                    }}>
                        <div style={{flex:"1"}}>
                            Edit Presets
                        </div>
                        { !presetVisible &&
                        <div style={{color:themes.spanColor, cursor:"pointer"}}>
                            Show
                        </div>
                        }
                        { presetVisible &&
                        <div style={{color:themes.spanColor, cursor:"pointer"}}>
                            Hide
                        </div>
                        }
                    </div>
                    { presetVisible &&
                    <div className="presets__mobileView">
                        <Presets setShieldColor={setShieldColor} setEditPreset={setEditPreset} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} themes={themes} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setShieldSource={setShieldSource} setInnerSource={setInnerSource} setIconModelSource={setIconModelSource} setTranslateShield={setTranslateShield} setTranslateInner={setTranslateInner} setTranslateIconModel={setTranslateIconModel} ></Presets>
                    </div>
                    }
                </div>
                }



                <div className="canvas" style={{backgroundColor:themes.background, color:themes.color}}>

                        { (!shieldSource && !iconModelSource && !textInputSource) &&
                        <center>
                        <svg width={svg} height={svg} viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" style={{display:"flex"}}>
                            <g>
                                <path transform={Paths.shields[0].pathTranslate} fill="#eee" d={Paths.shields[0].path}/>
                            </g>
                        </svg>
                        <button onClick={()=>{
                                // setShieldSource(Paths.shields[0].path)
                                // setInnerSource(Paths.shields[0].inner)
                                // setTranslateShield(Paths.shields[0].pathTranslate)
                                // setTranslateInner(Paths.shields[0].innerTranslate)
                                setEditPreset(true)
                            }} className="createButton" style={editButtonStyle}>Create new badge from scratch
                        </button>
                        </center>
                        }
                        { (shieldSource || iconModelSource || textInputSource) &&
                        <center>
                        <svg width={svg} height={svg} viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" style={{display:"flex"}}>
                            <g>
                                <path d={shieldSource} fill={shieldColor} transform={translateShield}/>
                                <path d={innerSource} fill={innerColor} transform={translateInner}/>
                                <path d={iconModelSource} fill={iconModelColor} transform={translateIconModel}/>
                                <text x="50%" y="70%" fontSize="40px" fill={textInputColor} textAnchor="middle">{textInputSource}</text>
                            </g>
                        </svg>
                        <button onClick={()=>{
                                setEditPreset(true)
                            }} className="createButton" style={editButtonStyle}>Edit this style
                        </button>

                            
                        </center>
                        
                        }
                        <center>
                            
                        </center>
                        {textCoverSource}
                            

                </div>


                { width<=breakpoint && editPreset &&

                <div className="tools__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <Toolbox themes={themes} innerShield={innerShield} iconModel={iconModel} text={text} textCover={textCover} colors={colors} setInnerShield={setInnerShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} setColors={setColors} />
                </div>
                }

                
                { width<=breakpoint && editPreset &&
                <div className="models" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="modelsContainer">
                    { innerShield &&
                    <InnerShields setShieldSource={setShieldSource} setTranslateShield={setTranslateShield} setTranslateInner={setTranslateInner} setInnerSource={setInnerSource}/>
                    }
                    { iconModel &&
                    <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                    }
                    { text &&
                    <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} themes={themes} />
                    }
                    { colors &&
                    <div style={{width:"100%"}}>
                        <Colors setShieldColor={setShieldColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} themes={themes} />
                    </div>
                    }
                    </div>
                </div>
                }


                <h4 style={{color:themes.color}}>Badge Name <span style={{color:"red"}}>*</span><br/></h4>
                <div className="inputWrap">
                    <input type="text" className={detailsInputClassName} style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                </div>
                <h5 style={{color:themes.grayColor}}>Great badge names are short and memorable. Need inspiration? How about blank-space? </h5><br/>

                <h4 style={{color:themes.color}}>Description  <span style={{color:themes.grayColor}}>(optional)</span><br/></h4>
                <div className="inputWrap">
                    <textarea className={detailsInputClassName} style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                </div>

                <div className="inputWrap">
                    <Link to={`${process.env.PUBLIC_URL}/badge/${badgeId}`}>
                        <button className="createButton" style={{backgroundColor:themes.header }}>Select Recepients</button>
                    </Link>
                    <button className="draftButton">Save to drafts</button>
                </div>


            </div>
            
            
            { width>breakpoint && editPreset &&
            <div className="models" style={{backgroundColor:themes.background, color:themes.color}}>
                <div className="modelsContainer">
                    { innerShield &&
                    <InnerShields setShieldSource={setShieldSource} setTranslateShield={setTranslateShield} setTranslateInner={setTranslateInner} setInnerSource={setInnerSource}/>
                    }
                    { iconModel &&
                    <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                    }
                    { text &&
                    <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} themes={themes} />
                    }
                    { colors &&
                    <Colors setShieldColor={setShieldColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} themes={themes} />
                    }
                </div>
            </div>
            }
            
            { width>breakpoint && editPreset &&
            <div className="tools" style={{backgroundColor:themes.background, color:themes.color}}>
                <Toolbox themes={themes} innerShield={innerShield} iconModel={iconModel} text={text} textCover={textCover} colors={colors} setInnerShield={setInnerShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} setColors={setColors} />
            </div>
            }
        </div>
    )
}

export default CreateBadgePage
