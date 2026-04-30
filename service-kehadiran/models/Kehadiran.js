module.exports = (sequelize, DataTypes) => {
  const Kehadiran = sequelize.define(
    "Kehadiran",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      student_nim: { type: DataTypes.STRING, allowNull: false },
      student_name: { type: DataTypes.STRING, allowNull: false },
      class_name: { type: DataTypes.STRING, allowNull: false },
      status: {
        type: DataTypes.ENUM("hadir", "izin", "sakit", "alpa"),
        defaultValue: "hadir",
        allowNull: false,
      },
      notes: { type: DataTypes.TEXT, allowNull: true },
      createdAt: {
        field: "created_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      tableName: "kehadiran",
    },
  );
  return Kehadiran;
};
