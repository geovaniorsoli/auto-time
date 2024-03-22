// app/page.tsx
import { Button } from '@nextui-org/button';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import stydef from "../styles/default.module.css"
import {Accordion, AccordionItem} from "@nextui-org/react";
import sty from "../styles/home.module.css"
export default function About() {
  return (
    <>
    <div className={stydef.containerContent}>
    <h1 className={stydef.topic}> CONHECA SOBRE </h1> 
    <h2 className={stydef.contentText}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus perferendis quibusdam cum saepe maiores dignissimos aliquid doloribus, nemo labore omnis iusto, cupiditate eum laudantium perspiciatis dicta? Reprehenderit, qui consectetur?</h2>

    <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="MOTIVAÇÃO">
        <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus perferendis quibusdam  </h1>
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="SOLUÇÃO">
      <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus perferendis quibusdam  </h1>
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="SCRIPT">
      <h1> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut repellendus perferendis quibusdam  </h1>
      </AccordionItem>
    </Accordion>
    </div>
    </>
  )
}