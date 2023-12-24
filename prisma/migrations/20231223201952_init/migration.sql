-- CreateTable
CREATE TABLE "comments" (
    "message" VARCHAR NOT NULL,
    "date_created" TIMESTAMPTZ(6) NOT NULL,
    "date_last_update" TIMESTAMPTZ(6) NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "id_owner" INTEGER NOT NULL,
    "id_post" INTEGER NOT NULL,
    "id" SERIAL NOT NULL,

    CONSTRAINT "comments_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "posts" (
    "id" SERIAL NOT NULL,
    "date_created" TIMESTAMPTZ(6) NOT NULL,
    "message" VARCHAR NOT NULL,
    "date_last_update" TIMESTAMPTZ(6),
    "id_creator" INTEGER NOT NULL,

    CONSTRAINT "posts_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,
    "password" VARCHAR NOT NULL,
    "fullName" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "profile_photo" VARCHAR,
    "age" INTEGER,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_profile_photo_key" ON "users"("profile_photo");

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "coments_posts_fk" FOREIGN KEY ("id_post") REFERENCES "posts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "coments_users_fk" FOREIGN KEY ("id_owner") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_fkk" FOREIGN KEY ("id_creator") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
