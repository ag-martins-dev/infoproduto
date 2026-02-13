import {
  DumbbellIcon,
  FileTextIcon,
  GoalIcon,
  SmartphoneIcon,
} from "lucide-react";
import { ElementType } from "react";

type Benefit = {
  id: number;
  title: string;
  subtitle: string;
  icon: ElementType;
};

export const benefits: Benefit[] = [
  {
    id: Math.floor(Math.random() * 1024),
    title: "4 fichas de treino por shape (A/B/C)",
    subtitle: "Organização completa para sua semana",
    icon: FileTextIcon,
  },
  {
    id: Math.floor(Math.random() * 1024),
    title: "Exercícios com séries e repetições",
    subtitle: "Tudo pronto para seguir na academia",
    icon: DumbbellIcon,
  },
  {
    id: Math.floor(Math.random() * 1024),
    title: "Treino com foco no shape",
    subtitle: "Sem negligenciar o resto do corpo",
    icon: GoalIcon,
  },
  {
    id: Math.floor(Math.random() * 1024),
    title: "PDF leve",
    subtitle: "Abre instanteneamente no celular",
    icon: SmartphoneIcon,
  },
];
