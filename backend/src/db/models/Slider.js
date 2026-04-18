import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const Slider = sequelize.define('Slider', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image_path: {
    type: DataTypes.STRING,
    allowNull: false
  },
  caption: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dept: {
    type: DataTypes.ENUM('cse', 'cce', 'me', 'ece'),
    allowNull: false,
    defaultValue: 'cse',
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'sliders',
  timestamps: true
});

export default Slider;