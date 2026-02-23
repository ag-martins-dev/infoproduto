import gluteShape from "@/public/shape-1.svg";
import slimShape from "@/public/shape-2.svg";
import legsShape from "@/public/shape-3.svg";
import fitnessShape from "@/public/shape-4.svg";

export type ShapeShowcase = {
  id: number;
  image: {
    src: string;
    alt: string;
    relWidth: number;
    relHeight: number;
  };
  color: string;
  tag: {
    label: string;
    description: string;
  };
};

export const shapesShowcases: ShapeShowcase[] = [
  {
    id: 1,
    image: {
      src: gluteShape,
      alt: "Shape foco em glúteos",
      relWidth: 200,
      relHeight: 448,
    },
    color: "rose-500",
    tag: {
      label: "Glúteos",
      description: "Foco em glúteos",
    },
  },
  {
    id: 2,
    image: {
      src: slimShape,
      alt: "Shape foco em definição",
      relWidth: 200,
      relHeight: 472,
    },
    color: "blue-500",
    tag: {
      label: "Slim",
      description: "Foco em definição",
    },
  },
  {
    id: 3,
    image: {
      src: legsShape,
      alt: "Shape foco em pernas",
      relWidth: 200,
      relHeight: 448,
    },
    color: "blue-500",
    tag: {
      label: "Pernas",
      description: "Foco em pernas",
    },
  },
  {
    id: 4,
    image: {
      src: fitnessShape,
      alt: "Shape equilibrado",
      relWidth: 200,
      relHeight: 448,
    },
    color: "rose-500",
    tag: {
      label: "Equilibrado",
      description: "Foco em performance",
    },
  },
];
