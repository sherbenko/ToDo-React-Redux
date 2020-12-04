// import React, {Component} from 'react'
// import './login-form.css'
//
// import {reduxForm, Field} from "redux-form";
//
// // const onSubmit = (values) => {
// //     console.log(values)
// // }
// const required = (val) => val ? undefined : 'Required';
// const maxLength = (val) => (val.length <= 10) ? undefined : 'Max length is 10 symbols';
//
//
// const renderInput = ({input,meta:{touched,error,warning}})=>(
//     <div>
//         <input {...input} type={"text"} className={"form-control"} />
//         {touched && ((error && <span style={{color:'red'}} >{error}</span>) || (warning && <span>{warning}</span>))}
//     </div>
// )
//
// class LoginForm extends Component {
//
//     render() {
//         console.log(this.props)
//
//         const {handleSubmit,valid,login} = this.props;
//         return (
//             <div className="login-form">
//                 <form onSubmit={handleSubmit}>
//                     <h2 className="text-center">Log in</h2>
//                     <div className="form-group">
//                         <Field
//                             type={"text"}
//                             name={"username"}
//                             component={renderInput}
//                             placeholder={"Username"}
//                             validate={[required,maxLength]}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <Field
//                             name={"password"}
//                             type={"password"}
//                             component={renderInput}
//                             placeholder={"Password"}
//                         validate={[required,maxLength]}
//                         />
//                     </div>
//                     <div className="form-group">
//                         <button type="submit" className="btn btn-primary btn-block" disabled={!valid}>Log in</button>
//                     </div>
//                     {/*<div className="clearfix">*/}
//                     {/*    <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>*/}
//                     {/*    <a href="#" className="float-right">Forgot Password?</a>*/}
//                     {/*</div>*/}
//                 </form>
//                 {/*<p className="text-center"><a href="#">Create an Account</a></p>*/}
//             </div>
//
//
//         )
//
//
//     }
// }
//
// export default reduxForm({
//     form: 'login-form',
//     // onSubmit,
// })(LoginForm);