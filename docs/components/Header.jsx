// app/page.tsx
import { Button } from '@nextui-org/button';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import stydef from "../styles/default.module.css"
import {Link} from "@nextui-org/react";
import sty from "../styles/home.module.css"
import { MoveRight } from 'lucide-react';
export default function Header() {
  return (
    <>
    <div className={stydef.containerCenter}>
    <TextGenerateEffect className={stydef.main}
     words="PROBLEMAS COM PLATAFORMA
     LENTA AO BATER PONTO?"
     />
      <Button as={Link} className={sty.buttonConhecaMais} variant="flat"  href="#sobre" color="secondary">
      Conheca o script <MoveRight />
      </Button>
    </div>
    </>
  )
}