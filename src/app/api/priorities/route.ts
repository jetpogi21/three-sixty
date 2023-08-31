//Generated by WriteToModelsRouteApi - models route next 13
import { Priority } from "@/models/PriorityModel";
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
  PriorityDeletePayload,
  PriorityFormUpdatePayload,
  PriorityFormikShape,
  PrioritySearchParams,
  PriorityUpdatePayload,
} from "@/interfaces/PriorityInterfaces";
import { NextResponse } from "next/server";
import { DEFAULT_LIMIT } from "@/utils/constants";
import {
  DEFAULT_SORT_BY,
  PRIMARY_KEY,
  REQUIRED_FIELDS,
  UNIQUE_FIELDS
} from "@/utils/constants/PriorityConstants";
import { PrioritySchema } from "@/schema/PrioritySchema";
import { appendAndFilters, getCursor } from "@/utils/api/utils";
import { createPriority, deletePriorities, updatePriority } from "@/utils/api/PriorityLibs";



const ModelObject = Priority;

//Generated by GeneratefindOptions
const findOptions: FindOptions<typeof Priority> = {
  //Generated by GenerateIncludeOption
  include: [],
  //Generated by GenerateAttributesOption
  attributes: [//Generated by GetAllModelAttributesBySeqModel
"id","name","slug","createdAt","updatedAt"],
};

//Generated by Generate_getModelsSimpleFilterNext13
export const GET = async (req: Request) => {
  //Generated by Generate_findOptionsCopy
  const findOptionsCopy: FindOptions<typeof Priority> = cloneDeep(findOptions);
  const priorityAttributes = Object.keys(Priority.getAttributes()).map(
    (attribute) => attribute
  );

  const searchParams = new URL(req.url).searchParams;

  const query = parseParams(searchParams) as Partial<PrioritySearchParams>;
  const primaryKey = PRIMARY_KEY;

  const simpleOnly = query["simpleOnly"];
  const cursor = query["cursor"];
  const fetchCount = query["fetchCount"] === "true";

  let limit = query["limit"];
  const sort = query["sort"]
    ? priorityAttributes.includes(query["sort"]) ||
      priorityAttributes.includes(query["sort"].substring(1))
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
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
{ name: { [Op.like]: `%${q}%` } },//Generated by GenerateAQFilterField - GenerateAQFilterField
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
      recordCount = await Priority.count({
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
      const data = await Priority.findAll(findOptionsCopy);

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
  const body = (await req.json()) as PriorityUpdatePayload;
  const { Priorities } = body;

  //Generated by GenerateUniquenessValidation
  //Validate record uniqueness

  UNIQUE_FIELDS.forEach((item) => {
    const uniquenessError = checkDuplicateCombinations(item, Priorities);

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

  for (const item of Priorities) {
    try {
      await PrioritySchema.validate(item);
    } catch (error) {
      return handleSequelizeError(error);
    }
  }

  try {
    for (const item of Priorities) {
      if (item[PRIMARY_KEY] === "") {
        await createPriority(item, t);
        recordsCreated++;
      } else {
        await updatePriority(item, PRIMARY_KEY, t);
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
  const body = (await req.json()) as PriorityDeletePayload;
  const { deletedPriorities } = body;

  if (deletedPriorities.length > 0) {
    const t = await sequelize.transaction();
    try {
      await deletePriorities(PRIMARY_KEY, deletedPriorities, t);
      t.commit();
      return NextResponse.json({
        status: "success",
        recordsDeleted: deletedPriorities.length,
      });
    } catch (error) {
      t.rollback();
      return handleSequelizeError(error);
    }
  }
};
