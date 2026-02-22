import {
  BicepsFlexedIcon,
  CheckCircleIcon,
  ClockIcon,
  FingerprintIcon,
  LucideIcon,
  TrendingDownIcon,
  ZapIcon,
} from "lucide-react";
import { ElementType } from "react";

export type Cause = {
  id: number;
  icon: ElementType & LucideIcon;
  text: string;
};

export const causesToBuy: Cause[] = [
  {
    id: 1,
    icon: ZapIcon,
    text: "Treina, mas sente que o corpo não evolui como gostaria",
  },
  {
    id: 2,
    icon: ClockIcon,
    text: "Não sabe qual treino seguir para chegar no shape desejado",
  },
  {
    id: 3,
    icon: BicepsFlexedIcon,
    text: "Quer focar em um tipo específico de resultado corporal",
  },
  {
    id: 4,
    icon: TrendingDownIcon,
    text: "Cansa de trocar treino toda semana sem ver progresso",
  },
  {
    id: 5,
    icon: CheckCircleIcon,
    text: "Quer algo simples, direto e fácil de aplicar na academia",
  },
  {
    id: 6,
    icon: FingerprintIcon,
    text: "Quer entender de vez o que realmente funciona para o seu biotipo",
  },
];
