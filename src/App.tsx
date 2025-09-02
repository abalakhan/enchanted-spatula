import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'; 
import Body from "./components/Body.tsx"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"
import spatulaBanner from "./assets/spatula-banner.png"

function App() {

  return (
    <>
      <Header />
      <main>
      <Body />
      </main>
      <img className="bottom-banner" src={spatulaBanner} alt="decorative banner with statula, kitchen utensils and vegetableds dancing around" />
      <Footer />
    </>
  )
}

export default App
