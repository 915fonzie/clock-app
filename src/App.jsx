import React from 'react'
import Quote from './components/Quote'
import Time from './components/Time'
import Location from './components/Location'
import Modal from './components/Modal'
import getLocalTime from './api/getLocalTime'
import arrowDownIcon from './assets/icons/icon-arrow-down.svg'

function App() {

  const [toggleBtn, setToggleBtn] = React.useState(false)
  const [windowSize, setWindowSize] = React.useState(null)

  React.useEffect(() => {  
    const handleResize = () => {
      setWindowSize(window.innerWidth)
  }
  window.addEventListener('resize', handleResize)

      return () => {
          window.removeEventListener('resize', handleResize)
      }
  }, [])

  const { isPending, isError, data, error } = getLocalTime()

  if (isPending) {
    return <span>Loading...</span>
  }
  if (isError) {
    return <span>Error: {error}</span>
  }

  function handleClick(event) {
    if (toggleBtn) {
      event.currentTarget.children[0].classList.add('hide-modal')
      event.currentTarget.children[0].classList.remove('reveal-modal')
    } else {
      event.currentTarget.children[0].classList.add('reveal-modal')
      event.currentTarget.children[0].classList.remove('hide-modal')
    }
    setToggleBtn(oldToggle => !oldToggle)
  }

  return (
    <main className='app-container'>
      <>
        <Quote className={toggleBtn ? "hide-quote" : ""}/>
        <Time windowSize={windowSize}>
          {/* <Location /> */}
          <h3>in Las Cruces, New Mexico</h3>
        </Time>
        <button
          onClick={e => handleClick(e)}
          className='reveal-btn'
          >
          {toggleBtn ? "LESS " : "MORE "}
          <img src={arrowDownIcon} className='arrow-icon'/>
        </button>
      </>
      <Modal data={data} className={toggleBtn ? "active-modal" : ""}/>
    </main>
  )
  


}

export default App
