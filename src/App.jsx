import React from 'react'
import FavoriteIcon from './sections/FavoriteIcon.jsx'
import RealTimeCounter from './sections/RealTimeCounter.jsx'
import LightboxViewer from './sections/LightboxViewer.jsx'
import ComplainForm from './sections/ComplainForm.jsx'
import BackgroundColor from './sections/BackgroundColor.jsx'
import MarkdownToHtml from './sections/MarkdownToHtml.jsx'

const App = () => {
  return (
    <div>
      <FavoriteIcon />
      <RealTimeCounter/>
      <LightboxViewer />
      <ComplainForm />
      <BackgroundColor />
      <MarkdownToHtml />
    </div>
  )
}

export default App