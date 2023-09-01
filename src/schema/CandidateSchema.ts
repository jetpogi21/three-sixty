//Generated by WriteToModelschema_ts - ModelSchema.ts
import * as Yup from "yup";

const CandidateSchema = Yup.object().shape({
  //Generated by GetAllFieldValidationBySeqModel
candidateName: Yup.string().required("Candidate Name is a required field."),
source: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
candidateStateID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerStateID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerOffice: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerSourceID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerTypeID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerContactName: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerEmail: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
providerContactNumber: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
email: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
employer: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
employerOfficeID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
employerStateID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
employerCandidateID: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
employerCandidateOwner: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
groupSiteID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
divisionID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
wageSubsidyAmount: Yup.string().required("Wage Subsidy Amount is a required field."),
benchmarkHours: Yup.string().required("Benchmark Hours is a required field."),
startDate: Yup.string().required("Start Date is a required field."),
statusID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
stageID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
outcomeReminder: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
payslipStatus: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
priorityID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
placementSent: Yup.boolean(),
placementStatusID: Yup.number().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
archive: Yup.boolean(),
invoiced: Yup.boolean(),
invoiceNumber: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
enquiryDate: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
enquiryType: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
wSAgreement: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
wSSchedule: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
notes: Yup.string().nullable().transform((value, originalValue) =>originalValue && originalValue !== "" ? value : null),
  
});

const CandidateArraySchema = Yup.object().shape({
  Candidates: Yup.array().of(
    Yup.object().shape({
     //Generated by GetAllArrayFieldValidationBySeqModel
candidateName: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Candidate Name is a required field.") : schema.notRequired()),source: Yup.string().nullable(),candidateStateID: Yup.number().nullable(),providerID: Yup.number().nullable(),providerStateID: Yup.number().nullable(),providerOffice: Yup.string().nullable(),providerSourceID: Yup.number().nullable(),providerTypeID: Yup.number().nullable(),providerContactName: Yup.string().nullable(),providerEmail: Yup.string().nullable(),providerContactNumber: Yup.string().nullable(),email: Yup.string().nullable(),employer: Yup.string().nullable(),employerOfficeID: Yup.number().nullable(),employerStateID: Yup.number().nullable(),employerCandidateID: Yup.string().nullable(),employerCandidateOwner: Yup.string().nullable(),groupSiteID: Yup.number().nullable(),divisionID: Yup.number().nullable(),wageSubsidyAmount: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Wage Subsidy Amount is a required field.") : schema.notRequired()),benchmarkHours: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Benchmark Hours is a required field.") : schema.notRequired()),startDate: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Start Date is a required field.") : schema.notRequired()),statusID: Yup.number().nullable(),stageID: Yup.number().nullable(),outcomeReminder: Yup.string().nullable(),payslipStatus: Yup.string().nullable(),priorityID: Yup.number().nullable(),placementSent: Yup.boolean().when("touched", ([touched], schema) => touched ? schema : schema.notRequired()),placementStatusID: Yup.number().nullable(),archive: Yup.boolean().when("touched", ([touched], schema) => touched ? schema : schema.notRequired()),invoiced: Yup.boolean().when("touched", ([touched], schema) => touched ? schema : schema.notRequired()),invoiceNumber: Yup.string().nullable(),enquiryDate: Yup.string().nullable(),enquiryType: Yup.string().nullable(),wSAgreement: Yup.string().nullable(),wSSchedule: Yup.string().nullable(),notes: Yup.string().nullable()
    })
  ),
});

export { CandidateSchema, CandidateArraySchema };