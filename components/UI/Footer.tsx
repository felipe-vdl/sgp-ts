import Fogo from './Fogo';

export default function Footer() {
  return (
    <footer className={`bg-roxo text-white py-1 px-4 z-10`}>
      <ul className="flex items-center justify-between text-center text-[11px]">
        <li>
          © 2023 Equipe de Desenvolvimento de Sistemas
        </li>
        <li>
          <a href="http://devs.mesquita.rj.gov.br/" target="_blank"><Fogo className="inline" viewBox="0 0 24 24" fill="currentColor" width="20" height="20" /></a> Subsecretaria de Tecnologia da Informação — Prefeitura Municipal de Mesquita
        </li>
        <li>
          Rua Arthur de Oliveira Vecchi, 120 - Centro - Mesquita - RJ - CEP: 26553-080
        </li>
        <li>
          <a href="https://lgpd.mesquita.rj.gov.br/?page_id=43" target="_blank">Política de Privacidade</a>
        </li>
      </ul>
    </footer>
  )
}