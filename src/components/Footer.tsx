export default function Footer() {

    let currentYear: number = new Date().getFullYear();


    return (

        

        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              
                
                  © {currentYear} Enchanted Spatula
                
                
                  <a className="grey-text text-lighten-4 right" href="https://github.com/abalakhan">Created with ❤ by abalakhan</a>
                  <br></br>
              
            </div>
          </div>
        </footer>
    )
}