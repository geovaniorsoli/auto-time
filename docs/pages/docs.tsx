import { Button } from '@nextui-org/button';
import Nav from "../components/Navbar";
import Footer from "../components/Footer"
import stydef from "../styles/default.module.css"
import sty from "../styles/docs.module.css"
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { Snippet } from "@nextui-org/react";

export default function docs() {
    return (
        <>
            <Nav />
            <div className={stydef.containerContentStartTitle}>
                <h1 className={stydef.topic}> DOCUMENTAÇÃO </h1>
            </div>
            <div className={stydef.containerContentCenterCard}>
                <Card className="w-300px">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">1. Pré-requisitos</p>
                            <p className="text-small text-default-500">Para executar o script, é necessário instalar os seguintes programas:</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://www.python.org/downloads/"
                        >
                            Python
                        </Link>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://www.microsoft.com/en-us/edge"
                        >
                            Microsoft Edge (versão Dev)
                        </Link>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">2. Baixar Arquivo</p>
                            <p className="text-small text-default-500">Clonar o projeto pelo GitHub.</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-small text-default-500">Para baixar o projeto, acesse:</p>
                        <Link
                            isExternal
                            showAnchorIcon
                            href="https://github.com/nextui-org/nextui"
                        >
                            GitHub
                        </Link>
                    
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">3. Baixar Dependências</p>
                            <p className="text-small text-default-500">Se optou por clonar o projeto pelo GitHub, baixe as dependências.</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-small mb-2 text-default-500">Dependências:</p>
                        <div className={sty.snippetContainer}>
                            <Snippet color="default"> pip install selenium</Snippet>
                            <Snippet color="default"> pip install python-dotenv</Snippet>
                        </div>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">4. Configurar Arquivo .env</p>
                            <p className="text-small text-default-500">Para o script funcionar, você precisa criar um arquivo .env com algumas informações</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-small text-default-500">Passos para configurar:</p>
                        <ol className="text-md">
                            <li>Crie um arquivo chamado .env</li>
                            <li>Configure com as seguintes informações:</li>
                        </ol>
                        <div className={sty.snippetContainer}>
                            <Snippet color="default">
                                <span>USER=usuário_de_login</span>
                                <span>PASS=senha</span>
                                <span>WEB=página_web</span>
                            </Snippet>
                        </div>
                        <p className="text-small text-default-500">Este script não armazena nenhum tipo de dado, sendo seguro.</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>


                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">5. Criando Executável (se necessário)</p>
                            <p className="text-small text-default-500">Para criar um executável a partir do script, siga as instruções:</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-small text-default-500">Passos para criar o executável:</p>
                        <div className={sty.snippetContainer}>
                            <Snippet color="default">pip install pyinstaller</Snippet>
                            <Snippet color="default">pyinstaller --onefile auto.py</Snippet>
                        </div>
                        <p className="text-small text-default-500">Este script não armazena nenhum tipo de dado, sendo seguro.</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>

                <Card className="max-w-[400px]">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-md">6. Rodando o executável</p>
                            <p className="text-small text-default-500">siga o caminho para achar o programa:</p>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p className="text-small text-default-500">Caminho:</p>
                        <Breadcrumbs isDisabled>
                            <BreadcrumbItem>auto-time</BreadcrumbItem>
                            <BreadcrumbItem>dist</BreadcrumbItem>
                            <BreadcrumbItem>lauraScript</BreadcrumbItem>
                        </Breadcrumbs>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </>
    )
}
