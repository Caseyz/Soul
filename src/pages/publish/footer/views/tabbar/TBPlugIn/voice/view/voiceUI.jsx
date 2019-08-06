
import React from 'react'

import { VoiceST } from './voiceStyle'
const VoiceUI = props => {
  return(
    <VoiceST className = 'voiceBox'>
        <div className = 'huatong'></div>
        <div className = 'luyin'></div>
        <div className = 'clickluyin'>点击录音</div>
        <div className = 'time'>0S</div>
    </VoiceST> 
  )
}

export default VoiceUI