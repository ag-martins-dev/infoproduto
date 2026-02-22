export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-4 border-t border-zinc-300 bg-zinc-100 px-5 py-8">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h4 className="text-center text-2xl font-bold text-zinc-900">
          Shape{" "}
          <span className="text-center font-black text-rose-500">Ideal</span>
        </h4>
        <p className="text-center text-xs/relaxed text-zinc-500 md:text-base/relaxed lg:text-sm/relaxed">
          Material educativo. Não substitui acompanhamento profissional.
        </p>
      </div>

      <p className="text-center text-xs/relaxed text-zinc-500">
        © 2026 Shape Ideal. Todos os direitos reservados.
      </p>
    </footer>
  );
};
