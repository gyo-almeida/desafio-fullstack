import { MigrationInterface, QueryRunner } from "typeorm";

export class fixCellPhone1684950629555 implements MigrationInterface {
    name = 'fixCellPhone1684950629555'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellPhone" bigint NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "cellPhone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "cellPhone" integer NOT NULL`);
    }

}
