//Generated by WriteToModelsRouteApi - models route next 13
import { EmployerOffice } from "@/models/EmployerOfficeModel";
import { FindOptions, Transaction } from "sequelize";
import { cloneDeep } from "lodash";
import {
  checkDuplicateCombinations,
  formatSortAsSequelize,
  getSort,
  parseParams,
  returnJSONResponse,
} from "@/utils/utils";
import { genericGetAll } from "@/utils/generic";
import sequelize from "@/config/db";
import handleSequelizeError from "@/utils/errorHandling";
import { Op } from "sequelize";
import {
  EmployerOfficeDeletePayload,
  EmployerOfficeFormUpdatePayload,
  EmployerOfficeFormikShape,
  EmployerOfficeSearchParams,
  EmployerOfficeUpdatePayload,
} from "@/interfaces/EmployerOfficeInterfaces";
import { NextResponse } from "next/server";
import { DEFAULT_LIMIT } from "@/utils/constants";
import {
  DEFAULT_SORT_BY,
  PRIMARY_KEY,
  REQUIRED_FIELDS,
  UNIQUE_FIELDS
} from "@/utils/constants/EmployerOfficeConstants";
import { EmployerOfficeSchema } from "@/schema/EmployerOfficeSchema";
import { appendAndFilters, getCursor } from "@/utils/api/utils";
import { createEmployerOffice, deleteEmployerOffices, updateEmployerOffice } from "@/utils/api/EmployerOfficeLibs";



const ModelObject = EmployerOffice;

//Generated by GeneratefindOptions
const findOptions: FindOptions<typeof EmployerOffice> = {
  //Generated by GenerateIncludeOption
  include: [],
  //Generated by GenerateAttributesOption
  attributes: [//Generated by GetAllModelAttributesBySeqModel
"id","name","slug","createdAt","updatedAt"],
};

//Generated by Generate_getModelsSimpleFilterNext13
export const GET = async (req: Request) => {
  //Generated by Generate_findOptionsCopy
  const findOptionsCopy: FindOptions<typeof EmployerOffice> = cloneDeep(findOptions);
  const employerOfficeAttributes = Object.keys(EmployerOffice.getAttributes()).map(
    (attribute) => attribute
  );

  const searchParams = new URL(req.url).searchParams;

  const query = parseParams(searchParams) as Partial<EmployerOfficeSearchParams>;
  const primaryKey = PRIMARY_KEY;

  const simpleOnly = query["simpleOnly"];
  const cursor = query["cursor"];
  const fetchCount = query["fetchCount"] === "true";

  let limit = query["limit"];
  const sort = query["sort"]
    ? employerOfficeAttributes.includes(query["sort"]) ||
      employerOfficeAttributes.includes(query["sort"].substring(1))
      ? query["sort"]
      : DEFAULT_SORT_BY
    : DEFAULT_SORT_BY;

  //Remove the - from the sort parameter
  const sortField = sort.includes("-") ? sort.substring(1) : sort;


  if (!simpleOnly) {
    const where: Record<string | symbol, unknown> = { [Op.and]: [] };
    const andFilters = [];
    
    //@ts-ignore
    const q = query["q"];

    if (q) {
      andFilters.push({
        [Op.or]: [
          //Generated by GetAllQFilterFieldBySeqModel
//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } }
        ],
      });
    }

    //Generated by GetAllBackendFiltersBySeqModel


    //get all the count here first
    let recordCount = 0;
    if (fetchCount) {
      recordCount = await EmployerOffice.count({
        where: { [Op.and]: andFilters },
      });
    }

    if (cursor) {
      appendAndFilters(andFilters, sort, sortField, primaryKey, cursor);
    }

    where[Op.and] = andFilters;
    findOptionsCopy.where = where;
    limit = limit || DEFAULT_LIMIT;
    findOptionsCopy.limit = parseInt(limit);

    //@ts-ignore
    findOptionsCopy.order = formatSortAsSequelize(
      getSort(sort, DEFAULT_SORT_BY, primaryKey)
    );

    try {
      const data = await EmployerOffice.findAll(findOptionsCopy);

      const cursor = getCursor(data, sortField, primaryKey);

      return NextResponse.json({
        rows: data,
        cursor,
        ...(fetchCount && { count: recordCount }),
      });
    } catch (err) {
      return handleSequelizeError(err);
    }
  } else {
    return genericGetAll(ModelObject, findOptionsCopy);
  }
};

//Generated by GetMultiCreateModelPOSTRoute - GetMultiCreateModelPOSTRoute
export const POST = async (req: Request) => {
  const body = (await req.json()) as EmployerOfficeUpdatePayload;
  const { EmployerOffices } = body;

  //Generated by GenerateUniquenessValidation
  //Validate record uniqueness

  UNIQUE_FIELDS.forEach((item) => {
    const uniquenessError = checkDuplicateCombinations(item, EmployerOffices);

    if (uniquenessError) {
      return returnJSONResponse({
        status: "error",
        error: uniquenessError,
        errorCode: 422,
      });
    }
  });

  const t = await sequelize.transaction();
  let recordsCreated = 0;

  for (const item of EmployerOffices) {
    try {
      await EmployerOfficeSchema.validate(item);
    } catch (error) {
      return handleSequelizeError(error);
    }
  }

  try {
    for (const item of EmployerOffices) {
      if (item[PRIMARY_KEY] === "") {
        await createEmployerOffice(item, t);
        recordsCreated++;
      } else {
        await updateEmployerOffice(item, PRIMARY_KEY, t);
      }
    }

    await t.commit();

    return NextResponse.json({
      recordsCreated,
    });
  } catch (err) {
    await t.rollback();
    return handleSequelizeError(err);
  }
};


export const DELETE = async (req: Request) => {
  const body = (await req.json()) as EmployerOfficeDeletePayload;
  const { deletedEmployerOffices } = body;

  if (deletedEmployerOffices.length > 0) {
    const t = await sequelize.transaction();
    try {
      await deleteEmployerOffices(PRIMARY_KEY, deletedEmployerOffices, t);
      t.commit();
      return NextResponse.json({
        status: "success",
        recordsDeleted: deletedEmployerOffices.length,
      });
    } catch (error) {
      t.rollback();
      return handleSequelizeError(error);
    }
  }
};
