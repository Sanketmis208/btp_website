// backend/src/db/migrations/16-add-dept-column.js
import { DataTypes } from "sequelize";

const TABLES = [
  "sliders",
  "people",
  "programs",
  "news",
  "events",
  "achievements",
  "newsletters",
  "directory_entries",
  "info_blocks",
  "research",
  "facilities",
];

export const up = async (queryInterface) => {
  for (const table of TABLES) {
    const tableDesc = await queryInterface
      .describeTable(table)
      .catch(() => null);
    if (!tableDesc) continue;
    if (tableDesc.dept) continue; // already exists

    await queryInterface.addColumn(table, "dept", {
      type: DataTypes.ENUM("cse", "cce", "me", "ece"),
      allowNull: false,
      defaultValue: "cse", // existing data belongs to CSE
    });
  }
  console.log("✓ dept column added to all tables");
};

export const down = async (queryInterface) => {
  for (const table of TABLES) {
    await queryInterface.removeColumn(table, "dept").catch(() => {});
  }
};
