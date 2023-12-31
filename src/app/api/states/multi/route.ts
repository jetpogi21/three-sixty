//Generated by WriteToMultiRoute_ts - multi route.ts
import sequelize from "@/config/db";
import { createState, updateState } from "@/utils/api/StateLibs";
import { StateUpdatePayload } from "@/interfaces/StateInterfaces";
import { StateSchema } from "@/schema/StateSchema";
import { PRIMARY_KEY, UNIQUE_FIELDS } from "@/utils/constants/StateConstants";
import handleSequelizeError from "@/utils/errorHandling";
import { checkDuplicateCombinations, returnJSONResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

//Generated by GetMultiCreateModelPOSTRoute - GetMultiCreateModelPOSTRoute
export const POST = async (req: Request) => {
  const body = (await req.json()) as StateUpdatePayload;
  const { States } = body;

  //Generated by GenerateUniquenessValidation
  //Validate record uniqueness

  UNIQUE_FIELDS.forEach((item) => {
    const uniquenessError = checkDuplicateCombinations(item, States);

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

  for (const item of States) {
    try {
      await StateSchema.validate(item);
    } catch (error) {
      return handleSequelizeError(error);
    }
  }

  try {
    for (const item of States) {
      if (item[PRIMARY_KEY] === "") {
        await createState(item, t);
        recordsCreated++;
      } else {
        await updateState(item, PRIMARY_KEY, t);
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
