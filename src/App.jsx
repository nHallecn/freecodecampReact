import React from 'react'
import FavoriteIcon from './sections/FavoriteIcon.jsx'
import RealTimeCounter from './sections/RealTimeCounter.jsx'
import LightboxViewer from './sections/LightboxViewer.jsx'
import ComplainForm from './sections/ComplainForm.jsx'
import BackgroundColor from './sections/BackgroundColor.jsx'

const App = () => {
  return (
    <div>
      <FavoriteIcon />
      <RealTimeCounter/>
      <LightboxViewer />
      <ComplainForm />
      <BackgroundColor />
    </div>
  )
}

export default App