import stydef from "../styles/default.module.css"
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function About() {
  return (
    <>
      <div id='sobre'></div>
      <div className={stydef.containerContent}>
        <h1 className={stydef.topic}> CONHECA SOBRE </h1>
        <h2 className={stydef.contentText}>
          Este script automatiza o processo de
          marcar o ponto em um sistema web
          o script é útil para
          automatizar marcação
          de ponto na plataforma oitchau,
          que em horário de pico,
          maioria das vezes demora para abrir.</h2>
        <Accordion>
          <AccordionItem key="1" aria-label="Accordion 1" title="MOTIVAÇÃO">
            <h1>  projeto foi motivado por uma necessidade de
              otimização do tempo durante os horários de pico,
              como a entrada às 8 horas da manhã, o horário de
              almoço ao meio-dia e o retorno ao trabalho às 13
              horas, além da saída às 18 horas. Durante esses
              períodos, a plataforma em questão enfrentava uma
              sobrecarga de requisições, o que resultava em tempos
              de carregamento prolongados, muitas vezes consumindo
              vários minutos preciosos do dia. Para contornar essa
              situação e ganhar eficiência, o script foi desenvolvido
              para automatizar o processo de marcação de ponto, reduzindo
              assim o tempo gasto pelo usuário para realizar essa tarefa
              manualmente. Ao automatizar esse processo, o script permite
              que o usuário economize tempo valioso, eliminando a necessidade
              de aguardar o carregamento da página e a interação manual com o
              sistema, melhorando assim a eficiência e a produtividade.  </h1>
          </AccordionItem>
          <AccordionItem key="2" aria-label="Accordion 2" title="SOLUÇÃO">
            <h1> O projeto surgiu da necessidade de lidar com a lentidão da
              plataforma em horários de pico, como entrada às 8h,
              almoço às 12h e saída às 18h, devido ao alto volume
              de acessos simultâneos. O script automatizado foi
              criado para aliviar essas interações,
              permitindo que você possa colocar o script para esperar na plataforma
              e assim você não se atrasar </h1>
          </AccordionItem>
          <AccordionItem key="3" aria-label="Accordion 3" title="SCRIPT">
            <h1> O código utiliza a biblioteca Selenium
              para automação de navegação na web.
              Ele verifica periodicamente o horário
              atual e, quando coincide com um horário
              pré-configurado, inicia o processo de
              login e executa a ação de marcar o ponto
              em uma plataforma online. O script utiliza
              as informações de login e os horários
              pré-configurados fornecidos por meio de
              variáveis de ambiente. Ele interage com
              os elementos da página da web, como campos
              de login e botões, para realizar as operações
              desejadas de forma automatizada. Ao finalizar,
              o navegador é fechado. Isso permite que o processo
              seja executado de forma independente,
              sem a necessidade de intervenção manual.  </h1>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}