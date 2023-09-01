//Generated by ImportCompleteModelFile
//Generated by GetCompleteModelFile

//Generated by GetModelImports
import {CreationOptional,DataTypes,InferAttributes,InferCreationAttributes,Model,Sequelize} from "sequelize";
import sequelize from "../config/db";
import slugify from "slugify";

//Generated by GetModelInterface
export default interface ProviderType extends Model<InferAttributes<ProviderType>, InferCreationAttributes<ProviderType>>
{id: CreationOptional<number>;
name: string;
slug : CreationOptional<string>;
createdAt: CreationOptional<Date>;
updatedAt: CreationOptional<Date>}

//Generated by GetModelDefinition
export const ProviderType = sequelize.define<ProviderType>(
"ProviderType",
//Generated by GetModelFieldsDictionary
{
 id: {
  type: DataTypes.BIGINT,
  autoIncrement: true,
  primaryKey: true,
  field: "id"
 }
 ,
 name: {
  type: DataTypes.STRING(50),
  unique: true,
  field: "name"
 }
 ,
 slug: {
  type: DataTypes.STRING,
  unique: true
 }
 ,
 createdAt: {
  type: DataTypes.DATE,
  defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  field: "createdAt"
 },
 updatedAt: {
  type: DataTypes.DATE,
  defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  field: "updatedAt"
 }}
,
//Generated By GetModelOptionDict
{
  name: {singular: "ProviderType",plural:"ProviderTypes"},
  tableName: "provider_types"
}
);

//Generated by GetModelHooks
ProviderType.beforeCreate((ProviderType: ProviderType, options) => {
  ProviderType.slug = slugify(ProviderType.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: "-",
  });
});

ProviderType.beforeUpdate((ProviderType: ProviderType, options) => {
  ProviderType.slug = slugify(ProviderType.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: "-",
  });
});

//Generated by GenerateSyncModel
export const ProviderTypeSync = async () => {
  try {
    await ProviderType.sync({ alter: true });
    console.log("Provider Type table has been created!");
  } catch (error) {
    console.error(
      `Unable to create ${"Provider Type".toLowerCase()} table:`,
      error
    );
  }
};