

import React,{useState} from 'react'
import Backbone from './assets/images/parking.png'
import mapimg from './assets/images/map.PNG'
import Mapbundle from './Mapbudles'
import Location from './Location'
import Loc from './loc'
export default function Home() {
    const [opening, setOpening] = useState(<img src={Backbone} style={{margin:'0 auto',paddingTop:'100p'}}/>)
    const [location, setLocation] = useState('')
    const [LOC, setLOC] = useState(0)
    const url ="https://www.atlistmaps.com/map/f69257d3-7b72-4945-8759-b5847e19b384"
      const openingHandle =()=>{
        setOpening('')
      }
      // let search = ''
      // if (opening === ''){
      //     return search=(<div class="wrap">
      //     <div class="search">
      //        <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
      //        <button type="submit" class="searchButton">
      //          <i className={"fa , fa-search"}></i>
      //       </button>
      //     </div>
      //  </div> )
      // }
      const successLocation=()=> <div><img src={mapimg} style={{width:'200px' ,height:'200px'}}/>
      <button onClick={()=><a href="https://www.atlistmaps.com/map/f69257d3-7b72-4945-8759-b5847e19b384"></a>}>Open map</button>
      </div>
      const errorLocation=()=><h1 style={{color: 'red'}}>You can't Park here Today from 8 - 16</h1>
    const NavigatorLoc = () => {
      setLOC(1)
      navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
        enableHighAccuracy: true
      })
    }
    if (LOC===1) {
      return (
        <div>
            <div class="mobile">
                <div onClick={openingHandle}>{opening}</div> 
                  <button style={{backgroundColor: 'red' ,color: 'white',borderRadius: '5px'}} onClick={NavigatorLoc} >Open GPS</button>
                  <button style={{backgroundColor: 'blue' ,color: 'white',borderRadius: '5px'}} onClick={()=>setLocation(<Location/>)}>Open map</button>
                  {location}
                  <img src={mapimg} style={{width:'200px',height:'200px' ,borderRadius: '5px',textDecoration : 'none' ,color:'white'}}/>
                  <br/>
                  <a href={url} style={{textDecoration : 'none' ,color:'white'}}>Open maps</a>
                {/* {Mapbundle} */}
                <div class="top"></div>
                <div class="bottom"></div>
	        </div>
        </div>
    )
    }
    
    
    
    return (
        <div>
            <div class="mobile">
                <div onClick={openingHandle}>{opening}</div> 
                  <button style={{backgroundColor: 'red' ,color: 'white',borderRadius: '5px'}} onClick={NavigatorLoc} >Open GPS</button>
                  <button style={{backgroundColor: 'blue' ,color: 'white',borderRadius: '5px'}} onClick={()=>setLocation(<Location/>)}>Open map</button>
                  {location}
                  
                {/* {Mapbundle} */}
                <div class="top"></div>
                <div class="bottom"></div>
	        </div>
        </div>
    )
}
