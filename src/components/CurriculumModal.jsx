import { useState } from 'react'
import { createPortal } from 'react-dom'
import { XIcon, UploadSimpleIcon } from '@phosphor-icons/react'

export default function CurriculumModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' })
  const [file, setFile] = useState(null)

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Currículo enviado com sucesso!')
    setForm({ name: '', email: '', phone: '' })
    setFile(null)
    onClose()
  }

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Fechar">
          <XIcon size={24} weight="bold" />
        </button>

        <h2 className="modal__title">Banco de Talentos</h2>
        <p className="modal__subtitle">Preencha dados e envie seu currículo.</p>

        <form className="modal__form" onSubmit={handleSubmit}>
          <div className="modal__field">
            <label className="modal__label" htmlFor="cv-name">Nome completo</label>
            <input
              id="cv-name"
              className="modal__input"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Informe seu nome"
              required
            />
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="cv-email">E-mail</label>
            <input
              id="cv-email"
              className="modal__input"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Informe seu e-mail"
              required
            />
          </div>

          <div className="modal__field">
            <label className="modal__label" htmlFor="cv-phone">Telefone</label>
            <input
              id="cv-phone"
              className="modal__input"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Informe seu telefone com DDD"
              required
            />
          </div>

          <div className="modal__field">
            <label className="modal__label">Currículo (PDF)</label>
            <label className="modal__upload">
              <UploadSimpleIcon size={22} weight="regular" />
              <span>{file ? file.name : 'Selecionar arquivo'}</span>
              <input
                type="file"
                accept=".pdf"
                onChange={handleFile}
                className="modal__file"
                required
              />
            </label>
          </div>

          <button type="submit" className="btn btn--primary modal__submit">
            Enviar Currículo
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
