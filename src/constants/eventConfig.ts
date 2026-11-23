export const WHATSAPP_GROUP_URL =
  'https://chat.whatsapp.com/C34kCxQFuJqGgoichE9HWg?s=cl&p=i&mlu=4&ilr=4&iam';

export const POSTER_IMAGE_PATH =
  '/assets/aistudio/WhatsApp_Image_2026-11-19_at_09.16.17_c2f6f9f1.jpeg';

export const ADMIN_EMAIL = 'contato.yadastudio@gmail.com';

// Synchronized verbatim with firebase-blueprint.json & firestore.rules
export const VALIDATION_RULES = {
  fullName: {
    minLength: 2,
    maxLength: 120,
  },
  whatsapp: {
    minLength: 8,
    maxLength: 25,
    pattern: /^[0-9+()\s\-]+$/,
  },
  email: {
    minLength: 5,
    maxLength: 160,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  cityState: {
    maxLength: 100,
  },
  expectation: {
    maxLength: 500,
  },
} as const;

export interface SessionModule {
  number: string;
  title: string;
  focus: string;
  description: string;
}

export const SESSION_MODULES: SessionModule[] = [
  {
    number: '01',
    title: 'Cuidando das Emoções',
    focus: 'Encerramento de ciclos e alívio emocional',
    description:
      'Um olhar acolhedor para as vivências de 2026, reconhecendo sentimentos, limites e aprendizados para deixar o peso para trás antes de planejar o novo ano.',
  },
  {
    number: '02',
    title: 'Fortalecendo a Fé e a Identidade',
    focus: 'Autoconhecimento e propósito de vida',
    description:
      'Reconexão com sua essência, valores inegociáveis e espiritualidade saudável, alinhando mente, coração e decisões com aquilo que realmente importa.',
  },
  {
    number: '03',
    title: 'Construindo Novos Caminhos',
    focus: 'Clareza nas áreas essenciais da vida',
    description:
      'Mapeamento equilibrado entre saúde emocional, família, rotina, projetos pessoais e carreira, substituindo a sobrecarga por direção consciente.',
  },
  {
    number: '04',
    title: 'Planejamento Prático Meu 2027',
    focus: 'Metas possíveis com o E-book de Planejamento',
    description:
      'Estruturação passo a passo das metas e hábitos para 2027 utilizando os exercícios guiados do e-book exclusivo entregue às participantes.',
  },
];

export const SUMMARY_HIGHLIGHTS = [
  { label: 'Início da Jornada', value: '30 de Novembro' },
  { label: 'Formato', value: '04 Encontros Online' },
  { label: 'Material Incluso', value: 'E-book de Planejamento' },
  { label: 'Acesso Imediato', value: 'Grupo Oficial WhatsApp' },
];
