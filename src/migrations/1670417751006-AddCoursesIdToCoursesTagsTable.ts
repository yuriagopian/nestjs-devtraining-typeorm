import { MigrationInterface, QueryRunner } from "typeorm"

export class AddCoursesIdToCoursesTagsTable1670417751006 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
