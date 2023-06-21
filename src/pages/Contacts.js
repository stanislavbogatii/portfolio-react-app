const Contacts = () => {
    return ( 
        <main className="section">
            <div className="container">
                <h1 className="main-title">Contacts</h1>
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Chisinau, Moldova</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+37368789723">+373(68)-789-723</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:stas.bogattiy@gmail.com" className="email-link">stas.bogattiy@gmail.com</a></p> 
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Contacts;