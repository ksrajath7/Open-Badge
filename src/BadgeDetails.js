import React from 'react'
import ThemeContext from './theme-context'
import './BadgeDetails.css'

function BadgeDetails(props) {

    console.log("hi from BadgeDetails")

    const themes = React.useContext(ThemeContext)
    
    const [isUpload, setIsUpload] = React.useState(true)
    
    const [inputClassName] = React.useState("badgeInput")
    const [inputStyle] = React.useState({color:themes.color, backgroundColor:themes.background, borderColor:themes.searchBarBorder})

    const [width, setWidth] = React.useState(window.innerWidth)
    const breakpoint = 800

    React.useEffect(() => {
      
      window.addEventListener("resize", () => setWidth(window.innerWidth));
  
    }, []);

    let badgeDetailsStyle = {backgroundColor:themes.background, flex:"0.4"}

    if(width<=breakpoint){
        badgeDetailsStyle.flex="1"
    }

    return (
        <div className="badgeDetails">
            { width>breakpoint &&
            <div className="sideTab" style={{backgroundColor:themes.background, color:themes.color}}>
                <div className="sideTabDetails" >
                    {props.a} 
                </div>
                <div className="sideTabDetails" >
                    <h4 style={{color:themes.color}}>Badge Name <span style={{color:"red"}}>*</span><br/></h4>
                </div>
                <div className="detailsInputWrap">
                    <input type="text" className={inputClassName} style={inputStyle}/>
                </div>
                <div className="sideTabDetails" >
                    <h4 style={{color:themes.color}}>Description  <span style={{color:themes.grayColor}}>(optional)</span><br/></h4>
                </div>
                <div className="detailsInputWrap">
                    <textarea className={inputClassName} style={inputStyle}/>
                </div>
                <div className="sideTabDetails" >
                    <h4 style={{color:themes.color}}>Issue Date <span style={{color:"red"}}>*</span><br/></h4>
                </div>
                <div className="detailsInputWrap">
                    <input type="text" className={inputClassName} style={inputStyle}/>
                </div>
            </div>
            }

            <div className="detailsSection" style={badgeDetailsStyle}>
                
            { width<=breakpoint &&
                <div className="sideTab__mobileView" style={{backgroundColor:themes.background, color:themes.color}}>
                    <div className="sideTabDetails" >
                        {props.a} 
                    </div>
                    <div className="sideTabDetails" >
                        <h4 style={{color:themes.color}}>Badge Name <span style={{color:"red"}}>*</span><br/></h4>
                    </div>
                    <div className="detailsInputWrap">
                        <input type="text" className={inputClassName} style={inputStyle}/>
                    </div>
                    <div className="sideTabDetails" >
                        <h4 style={{color:themes.color}}>Description  <span style={{color:themes.grayColor}}>(optional)</span><br/></h4>
                    </div>
                    <div className="detailsInputWrap">
                        <textarea className={inputClassName} style={inputStyle}/>
                    </div>
                    <div className="sideTabDetails" >
                        <h4 style={{color:themes.color}}>Issue Date <span style={{color:"red"}}>*</span><br/></h4>
                    </div>
                    <div className="detailsInputWrap">
                        <input type="text" className={inputClassName} style={inputStyle}/>
                    </div>
                </div>
               }


                <h3 style={{color:themes.color}}>Who would you like to give credit to?</h3>
                <hr style={{backgroundColor:themes.searchBarBorder}}/>

                <div className="radioButtonWrap">
                    <div className="radioButtonContainer" style={{display:'flex', alignItems:'center'}}>
                        <input type="radio" checked={isUpload} onChange={()=>{
                            setIsUpload(true)
                        }} className="radioInput" id="csv" name="choice" />
                        <h4 className="radioButtonText" style={{color:themes.color}}> Upload CSV File</h4>
                        <input type="radio" onChange={()=>{
                            setIsUpload(false)
                        }} className="radioInput" id="man" name="choice" />
                        <h4 style={{color:themes.color}}> Manual Form Entry</h4>
                    </div>
                    <div></div>
                </div>
                { isUpload &&
                <div className="uploadCsvContainer">
                    <div className="uploadCsv" style={{color:themes.color, background:themes.uploadCsvBackground}}>
                        <div>Be sure your CVS file is in the required format. <a href="/" target="_blank" style={{color:themes.spanColor, }}>Review guidelines</a> before uploading</div>
                        <center>
                            <div>
                                {/* <button className="uploadCsvButton" style={{backgroundColor:themes.header}}>Upload CSV File</button> */}
                                <input type="file" className="uploadCsvButton" style={{backgroundColor:themes.header}} />
                            </div>
                        </center>
                        <div>It may take a minute to upload your file, depending on the file size and your connection speed</div>
                        
                    </div>
                </div>
                }
                <div className="uploadCsvContainer">

                    <div className="inputFields" style={{color:themes.color, background:themes.background}}>
                        <div style={{display:'flex'}}>
                            <input type="text" placeholder="First Name" className={inputClassName} style={inputStyle}/>
                            <div style={{flex:"0.035"}}></div>
                            <input type="text" placeholder="Last Name" className={inputClassName} style={inputStyle}/>
                        </div>
                        <div style={{display:'flex'}}>
                            <input type="text" placeholder="Email" className={inputClassName} style={inputStyle}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails
