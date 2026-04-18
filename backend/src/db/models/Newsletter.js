import { DataTypes } from 'sequelize';
import { sequelize } from '../../config/database.js';

const Newsletter = sequelize.define('Newsletter', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  issueDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dept: {
  type: DataTypes.ENUM('cse', 'cce', 'me', 'ece'),
  allowNull: false,
  defaultValue: 'cse',
},
  pdf_path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'newsletters',
  timestamps: true
});

export default Newsletter;