import { useState } from 'react'
import Reveal from './Reveal'
import { FileTextIcon, LinkedinLogoIcon, TicketIcon } from '@phosphor-icons/react'

// Cole aqui a URL da sua implantação do Google Apps Script
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzx6W4zovx0qN1ecl_F_C34V35P1CuSbVH1nkcPleo8vENoI5pS0v-Qx77dJEDdfyUgjA/exec'

export default function BancoTalentos() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const form = event.target
    const payload = {
      name:    form.name.value,
      email:   form.email.value,
      area:    form.area.value,
      level:   form.level.value,
      link:    form.link.value,
      message: form.message.value,
    }

    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        // O Apps Script exige no-cors; a resposta não é legível,
        // mas os dados chegam na planilha normalmente.
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setSent(true)
    } catch (err) {
      setError('Não foi possível enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="banco-talentos" className="section section--talent-bank">
      <div className="container talent-bank">
        <Reveal className="talent-bank__copy">
          <span className="eyebrow">Banco de Talentos</span>
          <h2 className="section__title">Entre no radar das empresas que estarão no CG Tech Day.</h2>
          <p className="section__lead">
            Cadastre seu perfil para receber oportunidades, mentorias e conexões com empresas parceiras do ecossistema de tecnologia de Campo Grande.
          </p>
          <div className="talent-bank__message">
            {/* <BriefcaseMetalIcon size={24} weight="bold" /> */}
            <p>
              O cadastro não substitui a inscrição no evento. Ele ajuda recrutadores e parceiros a conhecerem seu momento profissional.
            </p>
          </div>
        </Reveal>

        <Reveal className="talent-bank__panel">
          {sent ? (
            <div className="talent-bank__success" role="status">
              <FileTextIcon size={42} weight="bold" />
              <h3>Perfil recebido.</h3>
              <p>Seus dados foram enviados para o banco de talentos do CG Tech Day. Fique de olho no e-mail cadastrado.</p>
              <div className="talent-bank__success-actions">
                <a
                  href="https://www.sympla.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  Garantir minha inscrição no evento
                </a>
                {/* <button type="button" className="btn btn--secondary" onClick={() => setSent(false)}>
                  Cadastrar outro perfil
                </button> */}
              </div>
            </div>
          ) : (
            <form className="talent-form" onSubmit={handleSubmit}>
              <div className="talent-form__row">
                <label className="talent-form__field">
                  <span>Nome completo</span>
                  <input name="name" type="text" placeholder="Seu nome" required />
                </label>
                <label className="talent-form__field">
                  <span>E-mail</span>
                  <input name="email" type="email" placeholder="voce@email.com" required />
                </label>
              </div>

              <div className="talent-form__row">
                <label className="talent-form__field">
                  <span>Área de interesse</span>
                  <select name="area" required defaultValue="">
                    <option value="" disabled>Selecione uma área</option>
                    <option>Desenvolvimento</option>
                    <option>Dados e IA</option>
                    <option>Produto e UX</option>
                    <option>Infraestrutura e Cloud</option>
                    <option>Segurança</option>
                    <option>Gestão e Negócios</option>
                  </select>
                </label>
                <label className="talent-form__field">
                  <span>Momento profissional</span>
                  <select name="level" required defaultValue="">
                    <option value="" disabled>Selecione seu momento</option>
                    <option>Estudante</option>
                    <option>Em transição de carreira</option>
                    <option>Júnior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                    <option>Liderança</option>
                  </select>
                </label>
              </div>

              <label className="talent-form__field">
                <span>LinkedIn ou portfólio</span>
                <div className="talent-form__with-icon">
                  <LinkedinLogoIcon size={20} weight="bold" aria-hidden="true" />
                  <input name="link" type="url" placeholder="https://linkedin.com/in/seu-perfil" />
                </div>
              </label>

              <label className="talent-form__field">
                <span>Mensagem rápida</span>
                <textarea name="message" rows="4" placeholder="Conte em poucas linhas o que você busca no evento." />
              </label>

              <div className="talent-form__footer">
                <p>Currículo poderá ser solicitado pela equipe do evento em uma próxima etapa.</p>
                {error && <p className="talent-form__error" role="alert">{error}</p>}
                <button type="submit" className="btn btn--primary" disabled={loading}>
                  {loading ? 'Enviando…' : 'Adicionar ao Banco de Talentos'}
                </button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
