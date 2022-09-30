-- CreateTable
CREATE TABLE "pessoas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "cidade_id" INTEGER NOT NULL,
    "tipo_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pessoas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipos_sanguineos" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "fator" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tipos_sanguineos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "locais_coleta" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "complemento" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "locais_coleta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doacoes" (
    "id" SERIAL NOT NULL,
    "pessoa_id" INTEGER NOT NULL,
    "local_id" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "doacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pessoas" ADD CONSTRAINT "pessoas_tipo_id_fkey" FOREIGN KEY ("tipo_id") REFERENCES "tipos_sanguineos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doacoes" ADD CONSTRAINT "doacoes_pessoa_id_fkey" FOREIGN KEY ("pessoa_id") REFERENCES "pessoas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "doacoes" ADD CONSTRAINT "doacoes_local_id_fkey" FOREIGN KEY ("local_id") REFERENCES "locais_coleta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
