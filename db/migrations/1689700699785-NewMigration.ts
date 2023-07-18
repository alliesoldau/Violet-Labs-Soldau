import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1689700699785 implements MigrationInterface {
    name = 'NewMigration1689700699785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar NOT NULL, "character" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quote"`);
    }

}
