//Generated by WriteToModelschema_ts - ModelSchema.ts
import * as Yup from "yup";

const TrackingStatusSchema = Yup.object().shape({
  //Generated by GetAllFieldValidationBySeqModel
name: Yup.string().required("Name is a required field."),
  
});

const TrackingStatusArraySchema = Yup.object().shape({
  TrackingStatus: Yup.array().of(
    Yup.object().shape({
     //Generated by GetAllArrayFieldValidationBySeqModel
name: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Name is a required field.") : schema.notRequired())
    })
  ),
});

export { TrackingStatusSchema, TrackingStatusArraySchema };
