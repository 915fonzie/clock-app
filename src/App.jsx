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
  const [date, setDate] = React.useState(new Date())

  React.useEffect(() => {  
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    if (windowSize === null) {
      setWindowSize(window.innerWidth)
    }

    return () => {
          clearInterval(interval)
          window.removeEventListener('resize', handleResize)
      }
  },[])

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
        <Quote className={toggleBtn ? "hide-quote" : ""} />
        <div className='time-and-btn-container'>
          <Time windowSize={windowSize} data={data} date={date}>
            <Location />
          </Time>
          <button
            onClick={e => handleClick(e)}
            className='reveal-btn'
            aria-label='button to reveal more info about your timezone, day of the year, day of the week, and week number'
            >
            {toggleBtn ? "LESS " : "MORE "}
            <img src={arrowDownIcon} className='arrow-icon' alt='arrow icon'/>
          </button>
        </div>
      </>
      <Modal data={data} hour={date.getHours()} className={toggleBtn ? "active-modal" : ""}/>
    </main>
  )
}

export default App
