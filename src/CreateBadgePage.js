import React from 'react'
import ThemeContext from './theme-context'
import Presets from './Presets/Presets'
import Toolbox from './Toolbox/Toolbox'
import IconModels from './ModelBox/IconModels'
import TextField from './ModelBox/TextField'
import Colors from './ModelBox/Colors'
import {Paths} from './ModelBox/Paths/Paths'
import './CreateBadgePage.css'
import { withRouter } from 'react-router-dom'
import InnerShields from './ModelBox/InnerShields'

function CreateBadgePage() {

    const themes = React.useContext(ThemeContext)
    const [badgeId] = React.useState('123456')

    const [editPreset, setEditPreset] = React.useState(false)
    const [downloadSvg, setDownloadSvg] = React.useState(false)

    const [innerShield, setInnerShield] = React.useState(true)
    const [iconModel, setIconModel] = React.useState(false)
    const [text, setText] = React.useState(false)
    const [colors, setColors] = React.useState(false)
    const [textCover, setTextCover] = React.useState(false)
    const [presetVisible, setPresetVisible] = React.useState(true)

    const [innerSource, setInnerSource] = React.useState('')
    const [iconModelSource, setIconModelSource] = React.useState('')
    const [textInputSource, setTextInputSource] = React.useState('')
    const [textCoverSource, setTextCoverSource] = React.useState('')
    
    const [innerColor, setInnerColor] = React.useState('#E7E9BB')
    const [iconModelColor, setIconModelColor] = React.useState('#ff0000')
    const [textInputColor, setTextInputColor] = React.useState('#AA076B')
    const [textCoverColor, setTextCoverColor] = React.useState('#7eff7a')
    const [shieldStrokeColor, setShieldStrokeColor] = React.useState('#403B4A')

    const [textCoverWidth, setTextCoverWidth] = React.useState('0')
    const [textCoverStrokeWidth, setTextCoverStrokeWidth] = React.useState('10')

    const [translateTextCover, setTranslateTextCover] = React.useState()
    const [translateIconModel, setTranslateIconModel] = React.useState()
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



    // const SelectRecepient = withRouter(({history})=>(
    //     <button className="createButton" style={{backgroundColor:themes.header }}  onClick={()=>{
            // Perform steps for generating badge id

    //         history.push(process.env.PUBLIC_URL+"/badge/"+badgeId)
    //     }}>Select Recepients</button>
        
    // ))


    const downloadSvgFunction=()=>{
        
        var svg = document.querySelector('#my_badge');
        // if(svg){
        //     let {width,height}=svg.getBBox()
        //     let cloned = svg.cloneNode(true)
        //     let outerHTML = cloned.outerHTML,
        //      blob = new Blob([outerHTML],
        //         {type:'image/svg+xml;charset=utf-8'});
        //     let URL = window.URL || window.webkitURL || window
        //     let blobURL = URL.createObjectURL(blob);
        //     let image = new Image()
        //     image.onload=()=>{
        //         let can
        //     }
        // }


        
            

        

        
        // var downloadButton = document.querySelector('#downloadButton');
        // downloadButton.insertAdjacentHTML('beforebegin', `<a href-lang="image/svg+xml" href=data:image/svg+xml;utf8,${escape(svg.outerHTML)} download="new_svg.svg">download svg</a>`)

    }










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
                        <Presets themes={themes} setEditPreset={setEditPreset} setShieldStrokeColor={setShieldStrokeColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextCoverColor={setTextCoverColor} setTextInputColor={setTextInputColor} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setInnerSource={setInnerSource} setIconModelSource={setIconModelSource} setTextCoverStrokeWidth={setTextCoverStrokeWidth} setTranslateInner={setTranslateInner} setTranslateIconModel={setTranslateIconModel} setTranslateTextCover={setTranslateTextCover} setTextCoverWidth={setTextCoverWidth} ></Presets>
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
                            <Presets themes={themes} setEditPreset={setEditPreset} setShieldStrokeColor={setShieldStrokeColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextCoverColor={setTextCoverColor} setTextInputColor={setTextInputColor} setTextInputSource={setTextInputSource} setTextCoverSource={setTextCoverSource} setInnerSource={setInnerSource} setIconModelSource={setIconModelSource} setTextCoverStrokeWidth={setTextCoverStrokeWidth} setTranslateInner={setTranslateInner} setTranslateIconModel={setTranslateIconModel} setTranslateTextCover={setTranslateTextCover} setTextCoverWidth={setTextCoverWidth} ></Presets>
                        </div>
                        }
                    </div>



                    <div className="canvas" style={{backgroundColor:themes.background, color:themes.color}}>
                        <div className="spaceForSvg"></div>
                            { (!innerSource && !iconModelSource && !textInputSource) &&
                            <center>
                            <svg viewBox="0 0 322 322" xmlns="http://www.w3.org/2000/svg" className="svgClass">
                                <g>
                                    <path transform={Paths.shields[0].innerTranslate} fill="#eee" d={Paths.shields[0].inner} stroke="bleck" strokeWidth="10" strokeLinejoin="round"/>
                                </g>
                            </svg>
                            <button onClick={()=>{
                                    // setInnerSource(Paths.shields[0].inner)
                                    // setTranslateInner(Paths.shields[0].innerTranslate)
                                    setPresetVisible(false)
                                    setEditPreset(true)
                                    window.scrollTo(0,0)
                                }} className="createButton" style={editButtonStyle}>Create new badge
                            </button>
                            </center>
                            }
                            { (innerSource || iconModelSource || textInputSource) &&
                            <center>
                            <svg id='my_badge' viewBox='0 0 322 322' className='svgClass' xmlns='http://www.w3.org/2000/svg'>
                                    <path d={innerSource} fill={innerColor} transform={translateInner} stroke={shieldStrokeColor} strokeWidth={textCoverStrokeWidth} strokeLinejoin='round'></path>
                                    <path d={iconModelSource} fill={iconModelColor} transform={translateIconModel}></path>
                                    <rect width={textCoverWidth} height='60' y='70%' fill={textCoverColor} transform={translateTextCover}></rect>
                                    <text x='50%' y='83%' fontSize='40px' fill={textInputColor} textAnchor='middle'>{textInputSource}</text>
                            </svg>
                            <button onClick={()=>{
                                    setPresetVisible(false)
                                    setEditPreset(true)
                                    window.scrollTo(0,0)
                                }} className='createButton' style={editButtonStyle}>Edit this style
                            </button>

                                
                            </center>
                            
                            }
                            <center>
                                
                            </center>
                            {textCoverSource}
                                

                        <div className='spaceForSvg'></div>
                    </div>


                    {/* ********** mobile__view ********** */}
                    { editPreset &&
                    <div className='tools__mobileView' style={{backgroundColor:themes.background, color:themes.color}}>
                        <Toolbox themes={themes} innerShield={innerShield} iconModel={iconModel} text={text} textCover={textCover} colors={colors} setInnerShield={setInnerShield} setIconModel={setIconModel} setText={setText} setTextCover={setTextCover} setColors={setColors} />
                    </div>
                    }

                    {/* ********** mobile__view ********** */}
                    { editPreset &&
                    <div className="models__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                        <div className="modelsContainer">
                        { innerShield &&
                        <InnerShields setTranslateInner={setTranslateInner} setInnerSource={setInnerSource} setTextCoverWidth={setTextCoverWidth} setTranslateTextCover={setTranslateTextCover} />
                        }
                        { iconModel &&
                        <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                        }
                        { text &&
                        <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} setTextCoverStrokeWidth={setTextCoverStrokeWidth} themes={themes} />
                        }
                        { colors &&
                        <div style={{width:"100%"}}>
                            <Colors innerColor={innerColor} iconModelColor={iconModelColor} textInputColor={textInputColor} textCoverColor={textCoverColor} shieldStrokeColor={shieldStrokeColor} setTextCoverColor={setTextCoverColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} setShieldStrokeColor={setShieldStrokeColor} themes={themes} />
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
                        {/* <SelectRecepient/> */}

                        <h5 onClick={()=>{
                            setDownloadSvg(true)
                        }}>Download</h5>

                        { downloadSvg && 
                        
                        <button id="downloadButton" className="createButton" style={{backgroundColor:themes.header }}  onClick={()=>{
                            downloadSvgFunction()
                        }}>
                            Download SVG
                            </button>
                        }

                        <div id="imm">hudsduhjsd</div>



                        {/* <button className="draftButton">Save to drafts</button> */}
                    </div>


                </div>
                
                
                { editPreset &&
                <div className="models" style={{backgroundColor:themes.background, color:themes.color}}>
                
                    <div className="modelsContainer">
                        { innerShield &&
                        <InnerShields setTranslateInner={setTranslateInner} setInnerSource={setInnerSource} setTextCoverWidth={setTextCoverWidth} setTranslateTextCover={setTranslateTextCover} />
                        }
                        { iconModel &&
                        <IconModels setIconModelSource={setIconModelSource} setTranslateIconModel={setTranslateIconModel} />
                        }
                        { text &&
                        <TextField textInputSource={textInputSource} setTextInputSource={setTextInputSource} themes={themes} />
                        }
                        { colors &&
                        <Colors innerColor={innerColor} iconModelColor={iconModelColor} textInputColor={textInputColor} textCoverColor={textCoverColor} shieldStrokeColor={shieldStrokeColor} setTextCoverColor={setTextCoverColor} setShieldStrokeColor={setShieldStrokeColor} setInnerColor={setInnerColor} setIconModelColor={setIconModelColor} setTextInputColor={setTextInputColor} themes={themes} />
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
