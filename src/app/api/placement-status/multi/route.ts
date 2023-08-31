//Generated by WriteToMultiRoute_ts - multi route.ts
import sequelize from "@/config/db";
import { createPlacementStatus, updatePlacementStatus } from "@/utils/api/PlacementStatusLibs";
import { PlacementStatusUpdatePayload } from "@/interfaces/PlacementStatusInterfaces";
import { PlacementStatusSchema } from "@/schema/PlacementStatusSchema";
import { PRIMARY_KEY, UNIQUE_FIELDS } from "@/utils/constants/PlacementStatusConstants";
import handleSequelizeError from "@/utils/errorHandling";
import { checkDuplicateCombinations, returnJSONResponse } from "@/utils/utils";
import { NextResponse } from "next/server";

//Generated by GetMultiCreateModelPOSTRoute - GetMultiCreateModelPOSTRoute
export const POST = async (req: Request) => {
  const body = (await req.json()) as PlacementStatusUpdatePayload;
  const { PlacementStatus } = body;

  //Generated by GenerateUniquenessValidation
  //Validate record uniqueness

  UNIQUE_FIELDS.forEach((item) => {
    const uniquenessError = checkDuplicateCombinations(item, PlacementStatus);

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

  for (const item of PlacementStatus) {
    try {
      await PlacementStatusSchema.validate(item);
    } catch (error) {
      return handleSequelizeError(error);
    }
  }

  try {
    for (const item of PlacementStatus) {
      if (item[PRIMARY_KEY] === "") {
        await createPlacementStatus(item, t);
        recordsCreated++;
      } else {
        await updatePlacementStatus(item, PRIMARY_KEY, t);
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
