import { FormInitialValues } from './types'
import supabase from '../database/supabase';

export const onSubmit = async (values: FormInitialValues) => {
  try {
    const { data, error } = await supabase
    .from('sop_responses')
    .upsert([
      {
        name: values?.name,
        email: values?.email,
        age: values?.age,
        highestEducation: values?.highestEducation,
        institute: values?.institute,
        study: values?.study,
        workExperience: values?.workExperience,
        instituteInCanada: values?.instituteInCanada,
        programInCanada: values?.programInCanada,
        countryApplyingFrom: values?.countryApplyingFrom,
        futureGoals: values?.futureGoals,
        englishListening: values?.englishListening,
        englishReading: values?.englishReading,
        englishSpeaking: values?.englishSpeaking,
        englishWriting: values?.englishWriting,
        paidFirstYearTuition: values?.paidFirstYearTuition,
        tuitionFee: values?.tuitionFee,
        didGIC: values?.didGIC,
        gicAmount: values?.gicAmount
      }
    ])
    if(error){
      console.log("Error in Data insertion:: ", error);
    } else {
      console.log("Data insertion success:: ", data);
      handleSendEmail(values);
    }
  }
  catch(e){
    console.log("Exception:: ", e)
  }
};
const handleSendEmail = async (values: FormInitialValues) => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ values }), // Send user's email as part of the request
    };

    const response = await fetch('https://localhost:8080/resend-email', requestOptions);

    if (response.ok) {
      const data = await response.json();
    } else {
      console.error('Email sending failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};