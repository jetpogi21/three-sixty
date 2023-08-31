//Generated by WriteToMultiRoute_ts - multi route.ts
import sequelize from "@/config/db";
import { createPosition, updatePosition } from "@/utils/api/PositionLibs";
import { PositionUpdatePayload } from "@/interfaces/PositionInterfaces";
import { PositionSchema } from "@/schema/PositionSchema";
import { PRIMARY_KEY, UNIQUE_FIELDS } from "@/utils/constants/PositionConstants";
import handleSequelizeError from "@/utils/errorHandling";
import { checkDuplicateCombinations, returnJSONResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

//Generated by GetMultiCreateModelPOSTRoute - GetMultiCreateModelPOSTRoute
export const POST = async (req: Request) => {
  const body = (await req.json()) as PositionUpdatePayload;
  const { Positions } = body;

  //Generated by GenerateUniquenessValidation
  //Validate record uniqueness

  UNIQUE_FIELDS.forEach((item) => {
    const uniquenessError = checkDuplicateCombinations(item, Positions);

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

  for (const item of Positions) {
    try {
      await PositionSchema.validate(item);
    } catch (error) {
      return handleSequelizeError(error);
    }
  }

  try {
    for (const item of Positions) {
      if (item[PRIMARY_KEY] === "") {
        await createPosition(item, t);
        recordsCreated++;
      } else {
        await updatePosition(item, PRIMARY_KEY, t);
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
