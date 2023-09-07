import * as Yup from 'yup';

import { FormInitialValues } from './types';

export const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  age: Yup.number().required('Age is required').min(1, 'Age must be greater than 0'),
  highestEducation: Yup.string().required('Highest Education is required'),
  institute: Yup.string().required('Institute is required'),
  study: Yup.string().required('Field of Study is required'),
  workExperience: Yup.string().required('Work experience is Required'),
  instituteInCanada: Yup.string().required('Institute in canada is required'),
  programInCanada: Yup.string().required('Program of Study in Canada is required'),
  countryApplyingFrom: Yup.string().required('Country applying from is required'),
  futureGoals: Yup.string().required('Future goals are required'),
  englishListening: Yup.number().required('Listening score is required'),
  englishReading: Yup.number()
  .required('Reading score is required'),
  englishSpeaking: Yup.number().required('Speaking score is required'),
  englishWriting: Yup.number().required('Writing score is required'),
  paidFirstYearTuition: Yup.string().required('Payment status is required'),
  tuitionFee: Yup.number().required('Tuition fee is required'),
  didGIC: Yup.string().required('GIC status is required'),
  gicAmount: Yup.number().required('GIC amount is required'),
});



export const FORM_INITIAL_VALUES: FormInitialValues = {
  name: '',
  email: '',
  age: '',
  highestEducation: '',
  institute: '',
  study: '',
  workExperience: '',
  instituteInCanada: '',
  programInCanada: '',
  countryApplyingFrom: '',
  futureGoals: '',
  englishListening: 0,
  englishReading: 0,
  englishSpeaking: 0,
  englishWriting: 0,
  paidFirstYearTuition: '',
  tuitionFee: 0,
  didGIC: '',
  gicAmount: 0,
};