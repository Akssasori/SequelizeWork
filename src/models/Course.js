const { Model, DataTypes } = require('sequelize');

class Course extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'courses'
        })
    }

    static associate(models) {
        this.belongsToMany(models.User, { foreignKey: 'course_id', through: 'user_courses', as: 'users'});
        // pertence a muitos user, chave primaria course_id da tabela user_courses do relacionamento users
    }
}

module.exports = Course;