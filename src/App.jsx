import React from 'react'
import FavoriteIcon from './sections/FavoriteIcon.jsx'
import RealTimeCounter from './sections/RealTimeCounter.jsx'
import LightboxViewer from './sections/LightboxViewer.jsx'
import ComplainForm from './sections/ComplainForm.jsx'
import BackgroundColor from './sections/BackgroundColor.jsx'
import MarkdownToHtml from './sections/MarkdownToHtml.jsx'
import PalidromeChecker from './sections/PalidromeChecker.jsx'
import BookmarkManager from './sections/BookmarkManager.jsx'
import GithubUserFinder from './sections/GithubUserFinder.jsx'
import Counter from './sections/Counter.jsx'
import ToDoList from './sections/ToDoList.jsx'
import Calculator from './sections/Calculator.jsx'

const App = () => {
  return (
    <div>
      <FavoriteIcon />
      <RealTimeCounter/>
      <LightboxViewer />
      <ComplainForm />
      <BackgroundColor />
      <MarkdownToHtml />
      <PalidromeChecker />
      <BookmarkManager />
      <GithubUserFinder />
      <Counter />
      <ToDoList />
      <Calculator />
    </div>
  )
}

export default App