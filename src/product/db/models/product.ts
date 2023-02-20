import { 
    Column,
    DataType,
    PrimaryKey,
    Table,
    Model } from "sequelize-typescript";

@Table({ tableName: "products", timestamps: false })
export class ProductModel extends Model{
    @PrimaryKey
    @Column({ type: DataType.INTEGER})
    declare id: number;

    @Column({ allowNull: false, type: DataType.STRING })
    declare name: string

    @Column({ allowNull: false, type: DataType.DECIMAL })   
    declare price: number

}