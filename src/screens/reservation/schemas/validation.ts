// ========= Validation Schema
// import all packages
import * as yup from 'yup';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().optional(),
  email: yup.string().required('Email is required').email('Email is invalid'),
  phoneNumber: yup
    .string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
});

export default validationSchema;
