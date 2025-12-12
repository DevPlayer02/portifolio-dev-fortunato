const Footer = () => {
    return (
        <footer className="w-full h-20 bg-main-dark-grey">
            <div className="max-w-7xl mx-auto h-auto flex items-center justify-end">
                <ul className="flex gap-6 text-secondary font-medium my-10 pb-10 pr-[5%] ">
                    <li><a className="hover:text-primary" href="https://www.linkedin.com/in/giovani-fortunato/">LinkedIn</a></li>
                    <li><a className="hover:text-primary" href="https://github.com/DevPlayer02">Github</a></li>
                    <li><a className="hover:text-primary" href="https://www.instagram.com/eudevxoh/?utm_source=ig_web_button_share_sheet">Instragram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;