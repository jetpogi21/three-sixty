//Generated by Generate_getModelAPIRouteNext13 - getModel API Route Next 13
import { Candidate } from "@/models/CandidateModel";
import { FindOptions,Sequelize } from "sequelize";
import { cloneDeep } from "lodash";
import { genericDelete, genericGetOne } from "@/utils/generic";
import { CandidateFormUpdatePayload } from "@/interfaces/CandidateInterfaces";
import { CandidateSchema } from "@/schema/CandidateSchema";
import sequelize from "@/config/db";
import handleSequelizeError from "@/utils/errorHandling";
import { returnJSONResponse, validateRequiredFields } from "@/utils/utils";
import { Op } from "sequelize";
import { updateCandidate } from "@/utils/api/CandidateLibs";
import { NextResponse } from "next/server";
import { PRIMARY_KEY } from "@/utils/constants/CandidateConstants";

//Generated by GetAllAPIRelatedRightModelImportBySeqModel
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { State } from "@/models/StateModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { Provider } from "@/models/ProviderModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { ProviderSource } from "@/models/ProviderSourceModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { ProviderType } from "@/models/ProviderTypeModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { EmployerOffice } from "@/models/EmployerOfficeModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { GroupSite } from "@/models/GroupSiteModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { Division } from "@/models/DivisionModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { Stage } from "@/models/StageModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { Priority } from "@/models/PriorityModel";
//Generated by GetAPIRelatedRightModelImport - GetAPIRelatedRightModelImport
import { PlacementStatus } from "@/models/PlacementStatusModel";

const ModelObject = Candidate;

//Generated by GeneratefindOptions
const findOptions: FindOptions<typeof Candidate> = {//Generated by GenerateIncludeOption

  include: [{
  model: State,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: Provider,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: ProviderSource,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: ProviderType,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: EmployerOffice,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: GroupSite,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: Division,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: Stage,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: Priority,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

},
{
  model: PlacementStatus,
  attributes: //Generated by GenerateAttributesOption

   ["id","name","slug"]

}]
,
//Generated by GenerateAttributesOption

  attributes: ["candidateName","source","candidateStateID","providerID","providerStateID","providerOffice","providerSourceID","providerTypeID","providerContactName","providerEmail","providerContactNumber","email","employer","employerOfficeID","employerStateID","employerCandidateID","employerCandidateOwner","groupSiteID","divisionID","wageSubsidyAmount","benchmarkHours","startDate","statusID","stageID","outcomeReminder","payslipStatus","priorityID","placementSent","placementStatusID","archive","invoiced","invoiceNumber","enquiryDate","enquiryType","wSAgreement","wSSchedule","notes","id"]
}

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  //Generated by Generate_findOptionsCopy
  const findOptionsCopy: FindOptions<typeof Candidate> = cloneDeep(findOptions);

  const id = params.id;
  return genericGetOne(ModelObject,  findOptionsCopy, id);
};

//Generated by GetUpdateFunctionWithRelationshipNext13 - Update With Relationship Next 13
export const PUT = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const res = (await req.json()) as CandidateFormUpdatePayload;
  const id = params.id;

  try {
    await CandidateSchema.validate(res);
  } catch (error: any) {
    return returnJSONResponse({
      status: "error",
      errorCode: 401,
      error: error.message,
    });
  }

  
  
  

  const t = await sequelize.transaction();

  try {
    await updateCandidate(res, PRIMARY_KEY, t, id);

    
    
    
    
    t.commit();
    return NextResponse.json({ status: "success",
      
});
  } catch (err) {
    t.rollback();
    return handleSequelizeError(err);
  }
};

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const id = params.id;
  return genericDelete(ModelObject, id);
};
