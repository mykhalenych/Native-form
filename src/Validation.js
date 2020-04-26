const getErrorsByValues = (values, step) => {
  const errors = {};
  switch (step) {
    case 0:
      if (values.firstName.length < 5) {
        errors.firstName = "Must be 5 characters or more";
      }
      if (values.lastName.length < 5) {
        errors.lastName = "Must be 5 characters or more";
      }
      if (values.password.length < 6) {
        errors.password = "Must be 6 characters or more";
      }
      if (values.age > 100 || values.age < 0) {
        errors.age = "Very funny:)";
      }
      break;
    case 1:
      if (values.email.length < 5) {
        errors.email = "Invalid email address";
      }
      if (values.phone.length < 10) {
        errors.phone = "Invalid mobile";
      }
      if (values.avatar === "") {
        errors.avatar = "Required";
      }
      break;
    default:
      break;
  }
  return errors;
};

export default getErrorsByValues;
