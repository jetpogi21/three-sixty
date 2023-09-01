//Generated by ImportCompleteModelFile
//Generated by GetCompleteModelFile

//Generated by GetModelImports
import {CreationOptional,DataTypes,InferAttributes,InferCreationAttributes,Model,Sequelize} from "sequelize";
import sequelize from "../config/db";
import slugify from "slugify";

//Generated by GetModelInterface
export default interface ProviderSource extends Model<InferAttributes<ProviderSource>, InferCreationAttributes<ProviderSource>>
{id: CreationOptional<number>;
name: string;
slug : CreationOptional<string>;
createdAt: CreationOptional<Date>;
updatedAt: CreationOptional<Date>}

//Generated by GetModelDefinition
export const ProviderSource = sequelize.define<ProviderSource>(
"ProviderSource",
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
  name: {singular: "ProviderSource",plural:"ProviderSources"},
  tableName: "provider_sources"
}
);

//Generated by GetModelHooks
ProviderSource.beforeCreate((ProviderSource: ProviderSource, options) => {
  ProviderSource.slug = slugify(ProviderSource.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: "-",
  });
});

ProviderSource.beforeUpdate((ProviderSource: ProviderSource, options) => {
  ProviderSource.slug = slugify(ProviderSource.name, {
    lower: true,
    remove: /[*+~.()'"!:@]/g,
    replacement: "-",
  });
});

//Generated by GenerateSyncModel
export const ProviderSourceSync = async () => {
  try {
    await ProviderSource.sync({ alter: true });
    console.log("Provider Source table has been created!");
  } catch (error) {
    console.error(
      `Unable to create ${"Provider Source".toLowerCase()} table:`,
      error
    );
  }
};