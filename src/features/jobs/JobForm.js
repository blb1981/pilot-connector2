import { useFormik } from 'formik'
import * as yup from 'yup'
import { Box, Button, TextField } from '@mui/material'
import DateAdapter from '@mui/lab/AdapterMoment'
import { DatePicker, LocalizationProvider } from '@mui/lab'
import moment from 'moment'
// import moment from 'moment'

// headline, job description, job start date, job end date (optional),
// airports, compensation

const validationSchema = yup.object().shape({
  headline: yup
    .string('Please enter a headline')
    .required('Headline is required')
    .max(100, 'Max of 100 characters'),
  description: yup
    .string('Please enter a job description')
    .required('Description is required')
    .min(5, 'Minimum of 5 characters required'),
  startDate: yup
    .string('Not a valid date')
    .required('Start date is required')
    .test('startDate', 'Please enter a valid date', (value) => {
      return moment(value).isValid()
    })
    .nullable(),
  airports: yup.string().max(24, 'Only 24 characters allowed').nullable(),
})

const JobForm = ({ buttonText }) => {
  const formik = useFormik({
    initialValues: {
      headline: '',
      description: '',
      startDate: null,
      airports: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <Box
      component="form"
      sx={{
        width: '90vw',
        maxWidth: '30rem',
        display: 'flex',
        flexDirection: 'column',
      }}
      onSubmit={formik.handleSubmit}
    >
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          id="headline"
          name="headline"
          label="Job headline"
          value={formik.values.headline}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.headline && Boolean(formik.errors.headline)}
          helperText={
            formik.touched.headline
              ? formik.errors.headline
              : 'Sell your job posting with a good headline'
          }
          placeholder="Short trip from Denver to Aspen"
        />
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          multiline
          rows={4}
          id="description"
          name="description"
          label="Job description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />
      </Box>

      <Box sx={{ mb: 2 }}>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <DatePicker
            label="Start Date"
            id="startDate"
            minDate={moment()}
            maxDate={moment().add(2, 'years')}
            value={formik.values.startDate}
            onChange={(newValue) => {
              formik.setFieldValue('startDate', newValue)
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                helperText={formik.touched.startDate && formik.errors.startDate}
                onBlur={() => {
                  formik.setFieldTouched('startDate', true, true)
                }}
                error={
                  formik.touched.startDate && Boolean(formik.errors.startDate)
                }
              />
            )}
          />
        </LocalizationProvider>
      </Box>

      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          name="airports"
          id="airports"
          label="Airports"
          placeholder="KMDW, KIND"
          value={formik.values.airports}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.airports && Boolean(formik.errors.airports)}
          helperText={formik.touched.airports && formik.errors.airports}
        />
      </Box>

      <Button type="submit" variant="contained" color="secondary" size="large">
        {buttonText}
      </Button>
    </Box>
  )
}

export default JobForm
