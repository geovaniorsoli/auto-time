import React from 'react';

export default function Footer() {
    return (
        <footer className="footerBody">
            <div className="footerContent">
                <div className="footerSection">
                    <h2 className='title'>Sobre</h2>
                    <ul>
                        <li><a href="/docs">Documentação</a></li>
                        <li><a href="#sobre">Sobre</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h2 className='title'>Contato</h2>
                    <ul>
                        <li><a target='_blank' href="https://github.com/geovaniorsoli/auto-time/issues">Suporte</a></li>
                    </ul>
                </div>
                <div className="footerSection">
                    <h2 className='title'>Repositorio</h2>
                    <ul className="socialIcons">
                        <li><a target='_blank' href="https://github.com/geovaniorsoli/auto-time">github</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
