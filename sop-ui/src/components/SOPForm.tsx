import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Select,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Box,
} from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { VALIDATION_SCHEMA, FORM_INITIAL_VALUES } from '../utils/constants'

import supabase from '../database/supabase';
import { FormInitialValues } from '../utils/types';
import { onSubmit } from '../utils/scripts';


const SOPForm = () => {

  return (
    <Container maxWidth='md' style={{ marginTop: '20px', marginBottom: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant='h4' gutterBottom>
          Customized SOP Generator
        </Typography>
        <Typography variant='body1' gutterBottom align='left'>
          Fill this questionnaire for the student. After submitting, you will receive an email at
          the email address that you have provided with a Statement of Purpose customized for you.
          You can use and modify that as per your needs.
        </Typography>
        <Typography variant='body1' gutterBottom align='left'>
          If you would like to get it edited, reviewed, or drafted by our experts, you can get in
          touch with us:{' '}
          <a href='https://effizient-immigration-inc.square.site/s/shop' target='_blank' rel="noreferrer">
            https://effizient-immigration-inc.square.site/s/shop
          </a>
        </Typography>
        <Box sx={{}} pt={4} />
        <Formik
          initialValues={FORM_INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={onSubmit}
          handleSubmit={onSubmit}
        >
          {({
            errors,
            touched,
            values,
            resetForm,
            initialValues,
            handleReset,
            handleSubmit,
            setFieldValue,
          }) => (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              <div>
                <Field
                  name='name'
                  type='text'
                  label='Full Name'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.name && touched.name)}
                  helperText={touched.name ? errors.name : ''}
                />
              </div>
              <div>
                <Field
                  name='email'
                  type='email'
                  label='Email'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.email && touched.email)}
                  helperText={touched.email ? errors.email : ''}
                />
              </div>
              <div>
                <Field
                  name='age'
                  type='number'
                  label='Age'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.age && touched.age)}
                  helperText={touched.age ? errors.age : ''}
                />
              </div>
              <div>
                <FormControl
                  fullWidth
                  variant='outlined'
                  error={!!(errors.highestEducation && touched.highestEducation)}
                >
                  <FormLabel>Highest Level of Education</FormLabel>
                  <Field
                    name='highestEducation'
                    label='Highest Level of Education'
                    as={Select}
                    variant='outlined'
                    fullWidth
                    error={!!(errors.highestEducation && touched.highestEducation)}
                  >
                    <MenuItem value=''>Select</MenuItem>
                    <MenuItem value='Grade 12'>Grade 12</MenuItem>
                    <MenuItem value='Diploma'>Diploma</MenuItem>
                    <MenuItem value='Bachelors Degree'>Bachelors Degree</MenuItem>
                    <MenuItem value='Masters Degree'>Masters Degree</MenuItem>
                    <MenuItem value='PhD'>PhD</MenuItem>
                  </Field>
                  <ErrorMessage name='highestEducation' />
                </FormControl>
              </div>
              <div>
                <Field
                  name='institute'
                  type='text'
                  label='Institute where you completed your highest level of education'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.institute && touched.institute)}
                  helperText={touched.institute ? errors.institute : ''}
                />
              </div>
              <div>
                <Field
                  name='study'
                  type='text'
                  label='What did you study'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.study && touched.study)}
                  helperText={touched.study ? errors.study : ''}
                />
              </div>
              <div>
                <Field
                  name='workExperience'
                  label='Do you have any relevant work experience?'
                  as={TextField}
                  multiline
                  rows={4}
                  variant='outlined'
                  fullWidth
                  placeholder='Write None if no work experience. Sample Answer: I worked as a Sales Manager at Effizient Immigration Inc from Jan 2022 till Feb 2023. In this role, I managed sales operations, reaching out to leads, lead the outreach program, ensured meeting monthly targets.'
                  error={!!(errors.workExperience && touched.workExperience)}
                  helperText={touched.workExperience ? errors.workExperience : ''}
                />
              </div>
              <div>
                <Field
                  name='instituteInCanada'
                  type='text'
                  label='What institute did you get admitted to in Canada?'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.instituteInCanada && touched.instituteInCanada)}
                  helperText={touched.instituteInCanada ? errors.instituteInCanada : ''}
                />
              </div>
              <div>
                <Field
                  name='programInCanada'
                  type='text'
                  label='What is your program of study in Canada?'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.programInCanada && touched.programInCanada)}
                  helperText={touched.programInCanada ? errors.programInCanada : ''}
                />
              </div>
              <div>
                <Field
                  name='countryApplyingFrom'
                  type='text'
                  label='Which country are you applying from?'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.countryApplyingFrom && touched.countryApplyingFrom)}
                  helperText={touched.countryApplyingFrom ? errors.countryApplyingFrom : ''}
                />
              </div>
              <div>
                <Field
                  name='futureGoals'
                  type='text'
                  label='What are your future goals?'
                  as={TextField}
                  multiline
                  rows={4}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.futureGoals && touched.futureGoals)}
                  helperText={touched.futureGoals ? errors.futureGoals : ''}
                />
              </div>
              <div>
                <Field
                  name='englishListening'
                  type='number'
                  label='English Scores - Listening'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.englishListening && touched.englishListening)}
                  helperText={touched.englishListening ? errors.englishListening : ''}
                />
              </div>
              <div>
                <Field
                  name='englishReading'
                  type='number'
                  label='English Scores - Reading'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.englishReading && touched.englishReading)}
                  helperText={touched.englishReading ? errors.englishReading : ''}
                />
              </div>

              <div>
                <Field
                  name='englishSpeaking'
                  type='number'
                  label='English Scores - Speaking'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.englishSpeaking && touched.englishSpeaking)}
                  helperText={touched.englishSpeaking ? errors.englishSpeaking : ''}
                />
              </div>
              <div>
                <Field
                  name='englishWriting'
                  type='number'
                  label='English Scores - Writing'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.englishWriting && touched.englishWriting)}
                  helperText={touched.englishWriting ? errors.englishWriting : ''}
                />
              </div>
              <div>
                <FormControl
                  component='fieldset'
                  fullWidth
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                  }}
                >
                  <FormLabel>Did you pay your first year tuition?</FormLabel>
                  <RadioGroup
                    name='paidFirstYearTuition'
                    row
                    value={values.paidFirstYearTuition?.toString()}
                    onChange={(event) => {
                      setFieldValue('paidFirstYearTuition', event.currentTarget.value);
                    }}
                  >
                    <FormControlLabel
                      value={'Yes'}
                      control={<Radio />}
                      label='Yes'
                    />
                    <FormControlLabel
                      value={'No'}
                      control={<Radio />}
                      label='No'
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div>
                <Field
                  name='tuitionFee'
                  type='number'
                  label='How much tuition fee did you pay?'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.tuitionFee && touched.tuitionFee)}
                  helperText={touched.tuitionFee ? errors.tuitionFee : ''}
                />
              </div>
              <div>
                <FormControl component='fieldset' fullWidth>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                    }}
                  >
                    <FormLabel>Did you do a GIC?</FormLabel>
                    <RadioGroup
                      name='didGIC'
                      row
                      value={values.didGIC?.toString()}
                      onChange={(event) => {
                        setFieldValue('didGIC', event.currentTarget.value);
                      }}
                    >
                      <FormControlLabel
                        value={'Yes'}
                        control={<Radio />}
                        label='Yes'
                      />
                      <FormControlLabel
                        value={'No'}
                        control={<Radio />}
                        label='No'
                      />
                    </RadioGroup>
                    {/* <RadioGroup name='didGIC' row>
                      <FormControlLabel value='Yes' control={<Radio />} label='Yes' />
                      <FormControlLabel value='No' control={<Radio />} label='No' />
                    </RadioGroup> */}
                  </Box>
                </FormControl>
              </div>
              <div>
                <Field
                  name='gicAmount'
                  type='number'
                  label='How much did you pay towards GIC?'
                  as={TextField}
                  variant='outlined'
                  fullWidth
                  error={!!(errors.gicAmount && touched.gicAmount)}
                  helperText={touched.gicAmount ? errors.gicAmount : ''}
                />
              </div>
              <div
                style={{
                  marginTop: '20px',
                  display: 'flex',
                  gap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button type='submit' variant='contained' color='primary'>
                  Submit
                </Button>
                <Button
                  type='button'
                  variant='contained'
                  color='secondary'
                  onClick={() => {
                    handleReset();
                  }}
                >
                  Clear Form
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default SOPForm;
