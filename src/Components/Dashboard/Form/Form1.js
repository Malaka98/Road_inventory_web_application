const Form1 = (values, fileInput) => {
  const errors = {};

  if (!values.txt1) {
    errors.txt1 = "Required";
  } else if (values.txt1.length > 15) {
    errors.txt1 = "Must be 15 characters or less";
  }

  if (!values.txt2) {
    errors.txt2 = "Required";
  } else if (values.txt2.length > 20) {
    errors.txt2 = "Must be 20 characters or less";
  }

  if (!values.txt3) {
    errors.txt3 = "Required";
  } else if (values.txt3.length > 20) {
    errors.txt3 = "Must be 20 characters or less";
  }

  if (!values.txt4) {
    errors.txt4 = "Required";
  } else if (values.txt4.length > 20) {
    errors.txt4 = "Must be 20 characters or less";
  }
  if (!values.txt5) {
    errors.txt5 = "Required";
  } else if (values.txt5.length > 15) {
    errors.txt5 = "Must be 15 characters or less";
  }

  if (!values.txt6) {
    errors.txt6 = "Required";
  } else if (values.txt6.length > 20) {
    errors.txt6 = "Must be 20 characters or less";
  }

  if (!values.txt7) {
    errors.txt7 = "Required";
  } else if (values.txt7.length > 20) {
    errors.txt7 = "Must be 20 characters or less";
  }

  if (!values.txt8) {
    errors.txt8 = "Required";
  } else if (values.txt8.length > 20) {
    errors.txt8 = "Must be 20 characters or less";
  }

  if (!values.select) {
    errors.select = "Required";
  } else if (values.select.length > 20) {
    errors.select = "Must be 20 characters or less";
  }

  if (fileInput.current.files.length === 0) {
    errors.file = "Please insert Image";
  } else if (fileInput.current.files[0].type !== "image/png") {
    errors.file = "not valid";
    console.log(fileInput.current);
  } else if (fileInput.current.files[0].size > 3000000) {
    errors.file = "full";
  }

  return errors;
};

export default Form1;
