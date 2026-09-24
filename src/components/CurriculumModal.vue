<script setup>
import { ref } from 'vue'
import { PhX, PhUploadSimple } from '@phosphor-icons/vue'

const props = defineProps({
  isOpen: { type: Boolean, required: true },
})
const emit = defineEmits(['close'])

const form = ref({ name: '', email: '', phone: '' })
const file = ref(null)

function handleFile(e) {
  file.value = e.target.files[0] ?? null
}

function handleSubmit() {
  alert('Currículo enviado com sucesso!')
  form.value = { name: '', email: '', phone: '' }
  file.value = null
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="modal-overlay" @click="emit('close')">
      <div class="modal" @click.stop>
        <button class="modal__close" aria-label="Fechar" @click="emit('close')">
          <PhX :size="24" weight="bold" />
        </button>

        <h2 class="modal__title">Banco de Talentos</h2>
        <p class="modal__subtitle">Preencha dados e envie seu currículo.</p>

        <form class="modal__form" @submit.prevent="handleSubmit">
          <div class="modal__field">
            <label class="modal__label" for="cv-name">Nome completo</label>
            <input id="cv-name" v-model="form.name" class="modal__input" type="text" placeholder="Informe seu nome" autocomplete="name" required />
          </div>

          <div class="modal__field">
            <label class="modal__label" for="cv-email">E-mail</label>
            <input id="cv-email" v-model="form.email" class="modal__input" type="email" placeholder="Informe seu e-mail" autocomplete="email" required />
          </div>

          <div class="modal__field">
            <label class="modal__label" for="cv-phone">Telefone</label>
            <input id="cv-phone" v-model="form.phone" class="modal__input" type="tel" placeholder="Informe seu telefone com DDD" autocomplete="tel" required />
          </div>

          <div class="modal__field">
            <label class="modal__label">Currículo (PDF)</label>
            <label class="modal__upload">
              <PhUploadSimple :size="22" />
              <span>{{ file ? file.name : 'Selecionar arquivo' }}</span>
              <input type="file" accept=".pdf" class="modal__file" required @change="handleFile" />
            </label>
          </div>

          <button type="submit" class="btn btn--primary modal__submit">Enviar Currículo</button>
        </form>
      </div>
    </div>
  </Teleport>
</template>
