import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovie1684935777192 implements MigrationInterface {
    name = 'createMovie1684935777192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellPhone" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cellPhone" integer NOT NULL`);
    }

}
