<script setup>
import { ref } from 'vue'
import Reveal from './Reveal.vue'
import { PhFileText, PhLinkedinLogo } from '@phosphor-icons/vue'

const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzx6W4zovx0qN1ecl_F_C34V35P1CuSbVH1nkcPleo8vENoI5pS0v-Qx77dJEDdfyUgjA/exec'

const sent    = ref(false)
const loading = ref(false)
const error   = ref(null)

const form = ref({ name: '', email: '', area: '', level: '', link: '', message: '' })

async function handleSubmit() {
  loading.value = true
  error.value   = null
  try {
    await fetch(SHEET_ENDPOINT, {
      method:  'POST',
      mode:    'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(form.value),
    })
    sent.value = true
  } catch {
    error.value = 'Não foi possível enviar. Tente novamente.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="banco-talentos" class="section section--talent-bank">
    <div class="container talent-bank">
      <Reveal class-name="talent-bank__copy">
        <span class="eyebrow">Banco de Talentos</span>
        <h2 class="section__title">Entre no radar das empresas que estarão no CG Tech Day.</h2>
        <p class="section__lead">
          Cadastre seu perfil para receber oportunidades, mentorias e conexões com empresas
          parceiras do ecossistema de tecnologia de Campo Grande.
        </p>
        <div class="talent-bank__message">
          <p>
            O cadastro não substitui a inscrição no evento. Ele ajuda recrutadores e parceiros
            a conhecerem seu momento profissional.
          </p>
        </div>
      </Reveal>

      <Reveal class-name="talent-bank__panel">
        <!-- Sucesso -->
        <div v-if="sent" class="talent-bank__success" role="status">
          <PhFileText :size="42" weight="bold" />
          <h3>Perfil recebido.</h3>
          <p>Seus dados foram enviados para o banco de talentos do CG Tech Day. Fique de olho no e-mail cadastrado.</p>
          <div class="talent-bank__success-actions">
            <a
              href="https://www.sympla.com.br"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--primary"
            >Garantir minha inscrição no evento</a>
          </div>
        </div>

        <!-- Formulário -->
        <form v-else class="talent-form" novalidate @submit.prevent="handleSubmit">
          <div class="talent-form__row">
            <label class="talent-form__field">
              <span>Nome completo</span>
              <input
                v-model="form.name"
                name="name"
                type="text"
                placeholder="Seu nome"
                autocomplete="name"
                required
              />
            </label>
            <label class="talent-form__field">
              <span>E-mail</span>
              <input
                v-model="form.email"
                name="email"
                type="email"
                placeholder="seu@email.com"
                autocomplete="email"
                required
              />
            </label>
          </div>

          <div class="talent-form__row">
            <label class="talent-form__field">
              <span>Área de interesse</span>
              <select v-model="form.area" name="area" required>
                <option value="" disabled>Selecione uma área</option>
                <option>Desenvolvimento</option>
                <option>Dados e IA</option>
                <option>Produto e UX</option>
                <option>Infraestrutura e Cloud</option>
                <option>Segurança</option>
                <option>Gestão e Negócios</option>
              </select>
            </label>
            <label class="talent-form__field">
              <span>Momento profissional</span>
              <select v-model="form.level" name="level" required>
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

          <label class="talent-form__field">
            <span>LinkedIn ou portfólio</span>
            <div class="talent-form__with-icon">
              <PhLinkedinLogo :size="20" weight="bold" aria-hidden="true" />
              <input
                v-model="form.link"
                name="link"
                type="url"
                placeholder="https://linkedin.com/in/seu-perfil"
              />
            </div>
          </label>

          <label class="talent-form__field">
            <span>Mensagem rápida</span>
            <textarea
              v-model="form.message"
              name="message"
              rows="4"
              placeholder="Ex: busco minha primeira oportunidade em desenvolvimento web..."
            />
            <p class="talent-form__helper">Opcional. Conte o que você busca no evento em poucas linhas.</p>
          </label>

          <div class="talent-form__footer">
            <p>Currículo poderá ser solicitado pela equipe do evento em uma próxima etapa.</p>
            <p v-if="error" class="talent-form__error" role="alert">{{ error }}</p>
            <button type="submit" class="btn btn--primary" :disabled="loading">
              {{ loading ? 'Enviando…' : 'Adicionar ao Banco de Talentos' }}
            </button>
          </div>
        </form>
      </Reveal>
    </div>
  </section>
</template>
