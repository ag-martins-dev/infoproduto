export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "Preciso ser avançada?",
    answer:
      "Não. O guia foi feito para iniciantes e intermediárias que querem treinar com direção.",
  },
  {
    id: 2,
    question: "Funciona em qualquer academia?",
    answer:
      "Sim. os exercícios são comuns e podem ser feitos em qualquer academia.",
  },
  {
    id: 3,
    question: "Preciso fazer dieta?",
    answer:
      "Não é obrigatório, mas uma alimentação ajustada acelera os resultados.",
  },
];
