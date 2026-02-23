type CardBadgeProps = {
  text: string;
};

export function CardBadge({ text }: CardBadgeProps) {
  return (
    <div className="rounded-full bg-emerald-500/10 px-4 py-1 ring ring-emerald-500/20">
      <p className="text-sm/relaxed font-medium text-emerald-500 lg:text-base/relaxed">
        {text}
      </p>
    </div>
  );
}
