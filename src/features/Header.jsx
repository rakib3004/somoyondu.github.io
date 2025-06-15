import Introduction from '../components/Introduction';
import NavBar from '../components/NavBar';

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