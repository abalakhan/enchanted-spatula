import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css'; 
import Body from "./components/Body.tsx"
import Header from "./components/Header.tsx"
import Footer from "./components/Footer.tsx"

function App() {

  return (
    <>
      <Header />
      <main>
      <Body />
      </main>
      <Footer />
    </>
  )
}

export default App
