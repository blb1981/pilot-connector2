import { Box, TextField } from '@mui/material'
import { Formik, Form, useField } from 'formik'
import * as Yup from 'yup'

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <TextField />
    </>
  )
}

const JobForm = () => {
  return (
    <Box>
      <Formik
        initialValues={{
          headline: '',
          description: '',
          startDate: null,
        }}
      >
        <Form>
          <TextField label="placeholder" />
        </Form>
      </Formik>
    </Box>
  )
}

export default JobForm
