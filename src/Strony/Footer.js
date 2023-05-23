const Footer = () => {
    return (<div>
        <footer>
            <h1>Our contacts</h1>
            <ul className="fa-ul">
                <li>
            <span className="fa-li">
                <i className="fa-solid fa-phone"></i>
            </span>
                    <a href="tel:+380668909932">
                        Manager
                    </a>
                </li>
                <li>
            <span className="fa-li">
                <i className="fa-solid fa-envelope"></i>
            </span>
                    <a href="mailto:danyakovenko123@gmail.com">
                        @Manager
                    </a>
                </li>
            </ul>
        </footer>
    </div>);
}
export default Footer;