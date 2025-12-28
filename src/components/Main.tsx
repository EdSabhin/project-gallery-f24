import React, { useState } from 'react'
import LoadingGallery from './LoadingGallery'
import HomeMain from './HomeMain'

type Props = {}

const Main = (props: Props) => {
  const [hidden, setHidden] = useState(false);
  console.log(hidden, "HIDDEN")
  return (
    <div>
      {!hidden ? <div id="loading-gallery">
      <LoadingGallery hidden={hidden} setHidden={setHidden} />
    </div> : <HomeMain hidden={hidden} />}
      
  
    </div>
  )
}

export default Main