import Link from "next/link";

import { Button } from "./_components/common/Button";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-100">
      <h1 className="text-center text-9xl/tight font-bold text-rose-500">
        404
      </h1>

      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-base/relaxed font-medium text-zinc-900/60 lg:w-2/3">
          A página que você está tentando acessar não existe, clique no botão
          abaixo para voltar para a página inicial.
        </p>
        <Button className="text-base" asChild>
          <Link href="/" prefetch>
            Voltar para o início
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFoundPage;
