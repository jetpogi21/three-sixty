//Generated by WriteToModelinterface_ts - ModelInterface.ts Next 13


import { ListQuery } from "./interface";

export interface GroupSiteModel {
  //Generated by GetAllModelFieldTypeBySeqModel
id: number | string;//Generated by GetModelFieldType
name: string;//Generated by GetModelFieldType
slug: string;
createdAt: string;
updatedAt: string;
  
  
  
}

//The keys after the updatedAt is generated by GetAllRelatedModelNameBySeqModel - RelatedModelName
export interface GroupSiteFormikShape extends Omit<GroupSiteModel, "slug" | "createdAt" | "updatedAt" 
 
> {
  touched: boolean;
  index: number;
}

//Use for continuos list form
export interface GroupSiteFormikInitialValues {
  GroupSites: GroupSiteFormikShape[];
  
}

//The FormikInitialValues is generated by GetAllRelatedFormikInitialValues - ModelFormikInitialValue
export interface GroupSiteFormFormikInitialValues
  extends Omit<GroupSiteFormikShape, "touched" | "index"> {
  
}

//The extends portion is generated by GetModelUpdatePayloadExtension - GetRelatedPartialPayload
export interface GroupSiteUpdatePayload  {
  GroupSites: Omit<GroupSiteFormikShape, "touched">[];
  
}

export interface GroupSiteDeletePayload {
  deletedGroupSites: string[] | number[];
}

//Use for single form (with children)
//The Related Models will be replaced by the Payload version
export interface GroupSiteFormUpdatePayload
  extends Omit<GroupSiteFormikShape, "touched" | "index" 
> 
 
{
  
}

export interface GroupSiteFormikFilter {
  //Generated by GetAllFilterInterfaceBySeqmodel
q: string
}

export interface GroupSiteSearchParams
  extends ListQuery,
    Omit<GroupSiteFormikFilter, ""> {
  //Generated by GetAllNonStringFilterTypes

}

export interface GetGroupSitesResponse {
  count: number;
  rows: GroupSiteModel[];
  cursor: string;
}
