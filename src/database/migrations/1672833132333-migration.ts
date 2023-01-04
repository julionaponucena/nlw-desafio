import { MigrationInterface, QueryRunner } from "typeorm";

export class migration1672833132333 implements MigrationInterface {
    name = 'migration1672833132333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_tags" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')), "email" varchar, "password" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_tags"("id", "name", "createdAt", "updateAt") SELECT "id", "name", "createdAt", "updateAt" FROM "tags"`);
        await queryRunner.query(`DROP TABLE "tags"`);
        await queryRunner.query(`ALTER TABLE "temporary_tags" RENAME TO "tags"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tags" RENAME TO "temporary_tags"`);
        await queryRunner.query(`CREATE TABLE "tags" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "updateAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`INSERT INTO "tags"("id", "name", "createdAt", "updateAt") SELECT "id", "name", "createdAt", "updateAt" FROM "temporary_tags"`);
        await queryRunner.query(`DROP TABLE "temporary_tags"`);
    }

}
