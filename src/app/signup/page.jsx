"use client"
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Image from "next/image";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";
import { getURL } from "@/utils";

export default function Signup() {
    
	const [formStatus, setFormStatus] = useState(false);
	const [actionStatus, setActionStatus] = useState(false);
	const [passShow, setPassShow] = useState(false);
	const [showConfirmPass, setShowConfirmPass] = useState(false);
	const [captchaError, setCaptchaError] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const formSubmissionURL = getURL("/api/register-artist");

	const passwordRules = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{6,16}$/;

	const initialValues = {
		username: "Hrishi85",
		email: "hrishikeshyjoshi@gmail.com",
		password: "Comics$1234",
		inviteID: "7347fdc2c3cab991",
	};

	const validationSchema = Yup.object().shape({
			username: Yup.string().required("Username is required").min(3, "Minimum 6 characters required").max(16, "Maximum limit of 18 exceeded"),
			email: Yup.string().required("Email is required").email("Invalid email format"),
			inviteID:Yup.string().required("Invite ID is required").min(16, "Minimum 16 characters required").max(17, "Maximum limit of 17 exceeded"),
			password: Yup.string().required("Password is required").min(6, "Minimum 6 characters required").max(18, "Maximum limit of 18 exceeded").matches(
				passwordRules,
				'Password must be 6-16 characters and include uppercase, lowercase, number, and special character'
			),
			confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
	});
	const handleSubmit = async (values) => {

		// const token = await recaptchaRef.current.executeAsync();
		// recaptchaRef.current.reset();

		// const captchaRes = await fetch('/api/verify-captcha', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ token }),
		// });
	
		// const { success } = await captchaRes.json();
		// if (!success) setCaptchaError("Captcha failed");

		setFormStatus('Submitting...');

		
		try {
			const response = await fetch(formSubmissionURL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					
				},
				body: JSON.stringify({ data: JSON.stringify({ username: values.username, email: values.email, password: values.password, inviteID: values.inviteID }) }),
			});
			
			console.log(response, "response");

			if (response.ok) {
				setActionStatus({type: "success", message: "Form submitted successfully!"});
				resetForm(); // Clear the form after submission
			} else {
				setActionStatus({type: "error", message: response.statusText || "An error occurred. Please try again later."});
			}
		} catch (err) {
			setActionStatus({type: "error", message: err.message || "An error occurred. Please try again later."});
		}
		setIsSubmitting(false);
	};
    
    return (
        <>
            <PageHeader />
                <ResponsiveContainer className="flex">
                    <section className="flex-1 p-10 mx-auto mb-[12vw] mt-[20vw] lg:my-[6vw] bg-dark rounded-[16px] w-auto lg:w-[550px] h-auto shadow-lg">
                        <h1 className="text-3xl font-bold text-center text-white">Sign Up</h1>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
						    {({ isSubmitting }) => (
                                <Form className="pt-10">
                                    {
                                        actionStatus && actionStatus.type === "success" && (<p className="bg-green-500 text-center text-white p-2 mb-3">{actionStatus.message}</p>)
                                    }
                                    {
                                        actionStatus && actionStatus.type === "error" && (<p className="bg-red-500 text-center text-white p-2 mb-3">{actionStatus.message}</p>)
                                    }
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="username" className="text-white ml-[1px]">Username *</label>
                                            <Field name="username" type="text" id="username" placeholder="Username" className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full mt-[3px]" />
                                            <ErrorMessage name="username" component="p" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="text-white ml-[1px]">Email *</label>
                                            <Field name="email" type="email" id="email" placeholder="Email" className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full mt-[3px]" />
                                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                                        </div>
                                        
                                        <div>
                                            <label htmlFor="invid" className="text-white ml-[1px]">Invite ID *</label>
                                            <Field name="inviteID" type="text" id="invid" placeholder="Invite ID" className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full mt-[3px]" />
                                            <ErrorMessage name="inviteID" component="p" className="text-red-500 text-sm mt-1" />
                                        </div>

                                        <div className="mt-[5px] relative">
                                            <label htmlFor="password" className="text-white ml-[1px]">Password *</label>
                                            <Field name="password" type={ passShow ? "text" : "password" } id="password" placeholder="Password" className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full mt-[3px]" />
                                            <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                                            <span className="flex h-14 w-14 absolute right-0 top-6 cursor-pointer items-center justify-center" onClick={() => setPassShow(!passShow)}>
                                                <Image src={passShow?"/assets/images/password/hide-pass.svg":"/assets/images/password/show-pass.svg"} width={25} height={25} alt="pass show"/>
                                            </span>
                                        </div>

                                        <div className="mt-[5px] relative">
                                            <label htmlFor="confirmPassword" className="text-white ml-[1px]">Confirm Password *</label>
                                            <Field name="confirmPassword" type={ passShow ? "text" : "password"} id="confirmPassword" placeholder="Confirm Password" className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full mt-[3px]" />
                                            <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm mt-1" />
                                            <span className="flex h-14 w-14 absolute right-0 top-6 cursor-pointer items-center justify-center"  onClick={() => setShowConfirmPass(!showConfirmPass)}>
                                                <Image src={passShow?"/assets/images/password/hide-pass.svg":"/assets/images/password/show-pass.svg"} width={25} height={25} alt="pass show"/>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-full flex space-x-6 mt-[2vw]">
                                        <button type="submit" disabled={isSubmitting} onClick={handleSubmit} className="flex-1 bg-ocre text-dark block leading-[56px] lg:leading-[56px] rounded-[6px] w-full text-center text-sm lg:text-lg font-light transition-all hover:bg-gold">
                                            <span className="mr-3">
                                                {isSubmitting ? "Submitting..." : "Register"}
                                            </span>
                                            <span className="arrow"></span>
                                        </button>
                                    </div>
                                </Form>
                            )}
					    </Formik>
                    </section>
                </ResponsiveContainer>
            <PagePFooter />
            <PageFooter />
        </>
        
        
    );
}