import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1718054519821 implements MigrationInterface {
  private newTable = new Table({
    name: "users",
    columns: [
      {
        name: "id",
        type: "uuid",
        isPrimary: true,
        default: "uuid_generate_v4()",
      },
      {
        name: "email",
        type: "character varying",
        isNullable: false,
        isUnique: true,
      },
      {
        name: "full_name",
        type: "character varying",
        isNullable: false,
      },
      {
        name: "password_hash",
        type: "character varying",
        isNullable: false,
      },
      {
        name: "created_at",
        type: "timestamp without time zone",
        isNullable: false,
        default: "now()",
      },
      {
        name: "updated_at",
        type: "timestamp without time zone",
        isNullable: false,
        default: "now()",
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.newTable);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.newTable);
  }
}
