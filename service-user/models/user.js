module.exports = (sequelize, DataTypes) =>{
    const user = Sequelize.define('User', {
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false
        },
        profession : {
            type : DataTypes.STRING,
            allowNull : false
        },
        avatar : {
            type : DataTypes.STRING,
            allowNull : true,
            defaultValue : null
        },
        role : {
            type : DataTypes.ENUM,
            values : ['admin', 'student'],
            allowNull : false,
            defautlValue : 'student'
        },
        email : {
            type : DataTypes.STRING,
            allowNull : false,
            unique : true
        },
        password : {
            type : DataType.STRING,
            allowNull : false
        },
        createdAt : {
            field : 'created_at',
            type : DataTypes.DATE,
            allowNull : false
        },
        updatedAt : {
            field : 'updated_at',
            type : DataTypes.DATE,
            allowNull : false
        }
    }, {
        tableName: 'users',
        timestamps : true
    })
    return user;
}