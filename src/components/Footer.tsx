export default function Footer() {

    let currentYear: number = new Date().getFullYear();


    return (

        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
            © {currentYear} Enchanted Spatula
            <p>Created with ❤ by <a className="grey-text text-lighten-4 right" href="https://github.com/abalakhan">abalakhan</a></p>
            </div>
          </div>
        </footer>
    )
}