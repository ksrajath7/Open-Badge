import React from 'react'
import ThemeContext from './theme-context'
import Presets from './Presets/Presets'
import Toolbox from './Toolbox/Toolbox'
import IconModels from './ModelBox/IconModels'
import TextField from './ModelBox/TextField'
import Colors from './ModelBox/Colors'
import Paths from './ModelBox/Paths/Paths'
import './CreateBadgePage.css'
import { Link, withRouter } from 'react-router-dom'
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

    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])
      let createStyle = {backgroundColor:themes.sectionBackground}
      let editButtonStyle = {backgroundColor:themes.header}

      if(editPreset){
          editButtonStyle.display="none"
      }
      
      const Back = withRouter(({history})=>(
        <div className="backButton" onClick={()=>{
          if(window.confirm("Are you sure you want to leave? All your unsaved changes will be lost")){
                history.push(process.env.PUBLIC_URL+'/Home')
          }
        }}>
            &lt;- Back to home
        </div>
        ))
    return (
        <div className="createBadgePage">
            <div className="createBadgeHeader">
                <Back/>
            </div>
            <div className="createBadgeBody">
                <div className="presetTab" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="presetLabel" >
                        Presets
                    </div>
                    <div className="presets">
                        <Presets themes={themes} setEditPreset={setEditPreset} setShieldColor={setShieldColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setShieldSource={setShieldSource} setInnerSource={setInnerSource} setIconModelSource={setIconModelSource} setTranslateShield={setTranslateShield} setTranslateInner={setTranslateInner} setTranslateIconModel={setTranslateIconModel}></Presets>
                    </div>
                    <hr style={{backgroundColor:themes.searchBarBorder}}/>
                </div>


                
                <div className="create" style={createStyle}>



                    {/* ********** mobile__view ********** */}
                    <div className="presetTab__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                        <div className="presetLabel__mobileView" onClick={()=>{
                            setPresetVisible(!presetVisible)
                        }}>
                            <div style={{flex:"1"}}>
                                Presets
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



                    <div className="canvas" style={{backgroundColor:themes.background, color:themes.color}}>

                            { (!shieldSource && !iconModelSource && !textInputSource) &&
                            <center>
                            <svg viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" className="svgClass">
                                <g>
                                    <path transform={Paths.shields[0].pathTranslate} fill="#eee" d={Paths.shields[0].path}/>
                                </g>
                            </svg>
                            <button onClick={()=>{
                                    // setShieldSource(Paths.shields[0].path)
                                    // setInnerSource(Paths.shields[0].inner)
                                    // setTranslateShield(Paths.shields[0].pathTranslate)
                                    // setTranslateInner(Paths.shields[0].innerTranslate)
                                    setPresetVisible(false)
                                    setEditPreset(true)
                                    window.scrollTo(0,0)
                                }} className="createButton" style={editButtonStyle}>Create new badge
                            </button>
                            </center>
                            }
                            { (shieldSource || iconModelSource || textInputSource) &&
                            <center>
                            <svg viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" className="svgClass">
                                <g>
                                    <path d={shieldSource} fill={shieldColor} transform={translateShield}/>
                                    <path d={innerSource} fill={innerColor} transform={translateInner}/>
                                    <path d={iconModelSource} fill={iconModelColor} transform={translateIconModel}/>
                                    <text x="50%" y="70%" fontSize="40px" fill={textInputColor} textAnchor="middle">{textInputSource}</text>
                                </g>
                            </svg>
                            <button onClick={()=>{
                                    setPresetVisible(false)
                                    setEditPreset(true)
                                    window.scrollTo(0,0)
                                }} className="createButton" style={editButtonStyle}>Edit this style
                            </button>

                                
                            </center>
                            
                            }
                            <center>
                                
                            </center>
                            {textCoverSource}
                                

                    </div>


                    {/* ********** mobile__view ********** */}
                    { editPreset &&
                    <div className="tools__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                        <Toolbox themes={themes} innerShield={innerShield} iconModel={iconModel} text={text} textCover={textCover} colors={colors} setInnerShield={setInnerShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} setColors={setColors} />
                    </div>
                    }

                    {/* ********** mobile__view ********** */}
                    { editPreset &&
                    <div className="models__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
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
                        <input type="text" className="badgeName" style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                    </div>
                    <h5 style={{color:themes.grayColor}}>Great badge names are short and memorable. Need inspiration? How about blank-space? </h5><br/>

                    <h4 style={{color:themes.color}}>Description  <span style={{color:themes.grayColor}}>(optional)</span><br/></h4>
                    <div className="inputWrap">
                        <textarea className="badgeName" style={{color:themes.color, backgroundColor:themes.sectionBackground, borderColor:themes.searchBarBorder}}/>
                    </div>

                    <div className="inputWrap">
                        <Link to={`${process.env.PUBLIC_URL}/badge/${badgeId}`}>
                            <button className="createButton" style={{backgroundColor:themes.header }}>Select Recepients</button>
                        </Link>
                        <button className="draftButton">Save to drafts</button>
                    </div>


                </div>
                
                
                { editPreset &&
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
                
                { editPreset &&
                <div className="tools" style={{backgroundColor:themes.background, color:themes.color}}>
                    <Toolbox themes={themes} innerShield={innerShield} iconModel={iconModel} text={text} textCover={textCover} colors={colors} setInnerShield={setInnerShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} setColors={setColors} />
                </div>
                }
            </div>
            
            
        </div>
    )
}

export default CreateBadgePage
