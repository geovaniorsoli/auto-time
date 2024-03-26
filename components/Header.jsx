// app/page.tsx
import { Button } from '@nextui-org/button';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import stydef from "../styles/default.module.css"
import {Link} from "@nextui-org/react";
import sty from "../styles/home.module.css"
import { Download } from 'lucide-react';
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
export default function Header() {
  return (
    <>
    <div className={stydef.containerCenter}>
    <TextGenerateEffect className={stydef.main}
     words="PROBLEMAS COM PLATAFORMA
     LENTA AO BATER PONTO?"
     />
    <Popover className={sty.Popover} placement="bottom" offset={20}>
      <PopoverTrigger>
      <Button className={sty.buttonConhecaMais} variant="flat" target='_blank'   color="primary">
      Baixar o script <Download />
      </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className={sty.popcontent}>
          <div className="text-small font-bold">Atenção</div>
          <div className="text-tiny">Esse script é somente disponível </div>
          <div className="text-tiny"> para plataforma oitchau</div>
          <Link href="https://github.com/geovaniorsoli/oitchau-facilitador" color="primary">Baixar</Link>
        </div>
      </PopoverContent>
    </Popover>
    </div>
    </>
  )
}