import React, { useState } from 'react';
import style from "./EnquireForm.module.scss"
import { useEnquireForm } from './useEnquireForm';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

export default function EnquireForm({ }) {
    const { main, initialValues, validationSchema, hasSubmitted, contactUs, width } = useEnquireForm(style);

    return (
        <div className={` ${style.card}`} ref={main}>
            {/* <h2 className='h4 fw-700'> Chat to our team </h2>
            <p className='text-grey title-sm  mb-lg-4'>We’d love to talk about how we can help you.</p> */}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                    contactUs(values, actions);
                }}
            >

                {({ isSubmitting }) => (
                    <Form>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="">
                                
                                    <Field as={Input} className='form-control' type="text" id="name" name="name" placeholder="Full Name" />
                                    <ErrorMessage className="d-block text-red-500   text-xs mt-1 " name="name" component="div" />
                            </div>
                            <div className="">
                                    <Field as={Input}  className='form-control' type="text" id="phone" name="phone" placeholder="Phone Number" />
                                    <ErrorMessage className="d-block text-red-500   text-xs mt-1 " name="phone" component="div" />
                            </div>
                            <div className="">

                                    <Field as={Input}  className='form-control' id="email" name="email" type="email" placeholder="name@example.com" />
                                    <ErrorMessage className="d-block text-red-500   text-xs mt-1 " name="email" component="div" />
                            </div>
                            {/* <div className="">
                                    <Field as="select" name="type" id="type" className={`form-select`} aria-label="Floating label select example">
                                        <option  >Select Enquiry Type</option>
                                        <option value={"generalEnquiry"}>General Enquiry</option>
                                        <option value={"salesEnquiry"}>Sales Enquiry</option>
                                    </Field>
                                    <ErrorMessage className="d-block text-red-500   text-xs mt-1 " name="type" component="div" />
                            </div> */}
                            <div className="">
                                    <Field as={Textarea}
                                        id="message" name="message"
                                        className='form-control'
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                    <ErrorMessage className="d-block text-red-500   text-xs mt-1 " name="message" component="div" />
                            </div>
                           
                            <div className="col-12 text-end">
                                <button type="submit" className={`btn btn-outline-secondary ${isSubmitting && "text-transparent"} `} disabled={isSubmitting}>
                                    {isSubmitting &&
                                        <div className='position-absolute top-50 start-50 translate-middle'>
                                            <div className="spinner-border text-light spinner-border-sm" role="status">
                                                <span className="visually-hidden">Loading...</span>
                                            </div>
                                        </div>}Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}