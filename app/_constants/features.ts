import {
  DumbbellIcon,
  FileTextIcon,
  GoalIcon,
  LucideIcon,
  SmartphoneIcon,
} from "lucide-react";

export type Feature = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    id: 1,
    title: "4 fichas de treino por shape (A/B/C)",
    description:
      "Organização completa para sua semana, sem precisar improvisar",
    icon: FileTextIcon,
  },
  {
    id: 2,
    title: "Exercícios com séries e repetições",
    description: "Tudo pronto para seguir na academia, sem dúvida nenhuma.",
    icon: DumbbellIcon,
  },
  {
    id: 3,
    title: "Treino com foco no shape",
    description:
      "Sem negligenciar o resto do corpo — equilíbrio e resultado juntos.",
    icon: GoalIcon,
  },
  {
    id: 4,
    title: "PDF leve",
    description: "Abre instantaneamente no celular — sem app, sem cadastro.",
    icon: SmartphoneIcon,
  },
];
