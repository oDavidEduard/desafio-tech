-- CreateTable
CREATE TABLE "Recorte" (
    "id" TEXT NOT NULL,
    "nome_modelo" TEXT NOT NULL,
    "ordem_exibicao" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "tipo_recorte" TEXT NOT NULL,
    "posicao_recorte" TEXT NOT NULL,
    "tipo_produto" TEXT NOT NULL,
    "material_recorte" TEXT NOT NULL,
    "cor_material" TEXT NOT NULL,
    "link_imagem" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recorte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Recorte_sku_key" ON "Recorte"("sku");
