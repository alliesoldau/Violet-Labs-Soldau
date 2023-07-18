import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration11689706655952 implements MigrationInterface {
    name = 'Migration11689706655952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quote" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "quote" varchar NOT NULL, "character" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "quote"`);
    }

}
