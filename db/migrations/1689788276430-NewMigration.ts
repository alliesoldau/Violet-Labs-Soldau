import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1689788276430 implements MigrationInterface {
    name = 'NewMigration1689788276430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quote" ("quote_id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar NOT NULL, "character" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quote"`);
    }

}
