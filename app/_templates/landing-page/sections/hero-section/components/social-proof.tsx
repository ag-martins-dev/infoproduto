import { AvatarStack } from "./avatar-stack";

export function SocialProof() {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <AvatarStack />
      <span className="text-xs/relaxed text-zinc-500 md:text-base/relaxed">
        <b className="text-zinc-900">+2.400 pessoas</b> já estão no shape
        correto.
      </span>
    </div>
  );
}
