import spatulaLogo from "./assets/enchanted-spatula.png";

export default function Header() {


    return ( 
    <nav>
        <div className="nav-wrapper">
        <a href="#" className="brand-logo center"><img className="logo-img" src={spatulaLogo}></img>Enchanted Spatula</a>
        </div>
    </nav>
        
    )
}