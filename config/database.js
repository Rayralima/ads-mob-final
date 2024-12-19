const Product = sequelize.define('Product', {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    quantity: { type: DataTypes.INTEGER },
    photo_url: { type: DataTypes.STRING },
  });
  