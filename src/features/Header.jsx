import React from 'react'
import NavBar from '../components/NavBar'
import Introduction from '../components/Introduction'

const Header = () => {
  const backgroundStyle = {
    backgroundImage: 'url("somoyon-bg.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <div>

      <div className="min-h-screen flex items-center justify-start" style={backgroundStyle}>
        <NavBar />
        <Introduction />

      </div>
    </div>
  )
}

export default Header