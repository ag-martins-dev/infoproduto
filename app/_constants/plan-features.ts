type PlanFeature = {
  id: number;
  feature: string;
};

export const planFeatures: PlanFeature[] = [
  {
    id: Math.floor(Math.random() * 1024),
    feature: "4 fichas de treino por shape (A/B/C)",
  },
  {
    id: Math.floor(Math.random() * 1024),
    feature: "Exercícios com séries e repetições",
  },
  {
    id: Math.floor(Math.random() * 1024),
    feature: "Foco no shape sem negligenciar o resto",
  },
  {
    id: Math.floor(Math.random() * 1024),
    feature: "PDF leve (abre no celular)",
  },
  {
    id: Math.floor(Math.random() * 1024),
    feature: "Acesso imediato",
  },
  {
    id: Math.floor(Math.random() * 1024),
    feature: "Garantia de 7 dias",
  },
];
