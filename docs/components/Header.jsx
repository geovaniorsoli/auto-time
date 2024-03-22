// app/page.tsx
import { Button } from '@nextui-org/button';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import stydef from "../styles/default.module.css"
import sty from "../styles/home.module.css"
export default function Header() {
  return (
    <>
    <div className={stydef.containerCenter}>
    <TextGenerateEffect className={stydef.main}
     words="PROBLEMAS COM PLATAFORMA
     LENTA AO BATER PONTO?"
     />
    <Button className={sty.buttonConhecaMais} color="secondary">
        Conheca o script
      </Button>
    </div>
    </>
  )
}