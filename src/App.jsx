import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

// simple comment

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h1>Learn & Master GitHub Actions Events And Workflows</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
