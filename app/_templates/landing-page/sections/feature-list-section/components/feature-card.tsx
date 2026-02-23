import { LucideIcon } from "lucide-react";

type FeatureProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export function FeatureCard({ title, description, icon: Icon }: FeatureProps) {
  return (
    <div className="group flex flex-col gap-8 rounded-3xl bg-zinc-900/65 p-8 ring ring-zinc-700 backdrop-blur transition-all ease-in-out hover:-translate-y-2 hover:shadow-xl hover:ring-rose-500/65">
      <div className="size-fit rounded-xl bg-rose-500/5 p-4 ring ring-rose-900/60 transition-all ease-in-out group-hover:bg-rose-500/10 group-hover:ring-rose-900/80">
        <Icon className="size-6 text-rose-500" />
      </div>

      <div className="flex w-full flex-col items-start justify-center gap-3">
        <strong className="text-left text-lg/tight text-white">{title}</strong>
        <p className="text-left text-xs/relaxed text-zinc-500 md:text-sm/relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
