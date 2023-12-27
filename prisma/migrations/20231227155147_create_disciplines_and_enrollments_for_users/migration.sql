-- CreateTable
CREATE TABLE "enrollments_user_disciplines" (
    "id" SERIAL NOT NULL,
    "users_id" INTEGER NOT NULL,
    "disciplines_id" INTEGER NOT NULL,

    CONSTRAINT "enrollments_user_disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipline" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "discipline_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "enrollments_user_disciplines" ADD CONSTRAINT "enrollments_user_disciplines_users_id_fkey" FOREIGN KEY ("users_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enrollments_user_disciplines" ADD CONSTRAINT "enrollments_user_disciplines_disciplines_id_fkey" FOREIGN KEY ("disciplines_id") REFERENCES "discipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
