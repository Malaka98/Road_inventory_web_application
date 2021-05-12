import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./Login.css";

const validate = (values) => {
  const errors = {};

  if (!values.uName) {
    errors.uName = "Required";
  } else if (values.uName.length > 10) {
    errors.uName = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 15 characters or less";
  }

  return errors;
};

export default function Login() {
  const history = useHistory();
  //const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:4000/check",
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        if (typeof response.data.uinfo != "undefined") {
          if (response.data.auth === "login") {
            //setisLoading(false)
            history.push("/dashboard");
          }
        } else if (response.data === "Unauthorized Request") {
          //   setisLoading(true)
          console.log(response.data);
        }
      })
      .catch((response) => {
        console.log(response);
      });
  }, []);

  const formik = useFormik({
    initialValues: {
      uName: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const formdata = new FormData();
      formdata.append("uname", values.uName);
      formdata.append("pass", values.password);

      axios({
        method: "post",
        url: "http://localhost:4000/login",
        data: formdata,
        headers: {
          "content-type": "multipart/form-data",
        },
        withCredentials: true,
      })
        .then(function (response) {
          //handle success
          // console.log(response.data);

          history.push("/dashboard");
        })
        .catch(function (response) {
          //handle error
          // console.log(response);
        });
    },
  });

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={formik.handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="uName"
                id="uName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="login__input"
                placeholder="User name / Email"
              />
            </div>
            {formik.touched.uName && formik.errors.uName ? (
              <div className="text-danger">{formik.errors.uName}</div>
            ) : null}
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="login__input"
                placeholder="Password"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
}
