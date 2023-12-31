//Generated by WriteToMultiRoute_ts - multi route.ts
import sequelize from "@/config/db";
import { createEmployerOffice, updateEmployerOffice } from "@/utils/api/EmployerOfficeLibs";
import { EmployerOfficeUpdatePayload } from "@/interfaces/EmployerOfficeInterfaces";
import { EmployerOfficeSchema } from "@/schema/EmployerOfficeSchema";
import { PRIMARY_KEY, UNIQUE_FIELDS } from "@/utils/constants/EmployerOfficeConstants";
import handleSequelizeError from "@/utils/errorHandling";
import { checkDuplicateCombinations, returnJSONResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

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
};;
