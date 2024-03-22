import React from 'react';

export default function Footer() {
    return (
        <footer className="footerBody">
            <div className="footerContent">
                <div className="footerSection">
                    <h2 className='title'>Sobre</h2>
                    <ul>
                        <li><a href="#">Documentação</a></li>
                        <li><a href="#">Uso</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h2 className='title'>Contato</h2>
                    <ul>
                        <li><a href="#">Suporte</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h2 className='title'>Repositorio</h2>
                    <ul className="socialIcons">
                        <li><a href="#">github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
