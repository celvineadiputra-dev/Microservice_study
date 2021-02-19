module.exports = (sequelize, DataTypes)=>{
    const refreshToken = sequelize.define('refreshToken',{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true,
            allowNull : false
        },
        token : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        user_id : {
            type : DataTypes.INTEGER,
            allowNull : false
        },
        created_at : {
            type : DataTypes.DATE,
            field : 'created_at',
            allowNull : false
        },
        updated_at : {
            type : DataTypes.DATE,
            field: 'updated_at',
            allowNull : false
        }
    },{
        tableNameeeee: 'refresh_tokens',
        timestamps : true
    });
    return refreshToken;
}