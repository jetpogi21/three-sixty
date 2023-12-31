//Generated by WriteToModelschema_ts - ModelSchema.ts
import * as Yup from "yup";

const StateSchema = Yup.object().shape({
  //Generated by GetAllFieldValidationBySeqModel
name: Yup.string().required("Name is a required field."),
  
});

const StateArraySchema = Yup.object().shape({
  States: Yup.array().of(
    Yup.object().shape({
     //Generated by GetAllArrayFieldValidationBySeqModel
name: Yup.string().when("touched", ([touched], schema) => touched ? schema.required("Name is a required field.") : schema.notRequired())
    })
  ),
});

export { StateSchema, StateArraySchema };
