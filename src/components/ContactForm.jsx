"use client";

import { useRef, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from 'react-google-recaptcha';

const baseURL = process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:1337';
const captchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

export default function ContactForm() {

    const initialValues = { name: "", email: "", message: "" };

	const [formStatus, setFormStatus] = useState("");
    const [status, setStatus] = useState('');
	const [captchaError, setCaptchaError] = useState(false);

    const recaptchaRef = useRef();

	const validationSchema = Yup.object().shape({
    	name: Yup.string().required("Name is required").min(2, "Minimum two characters required").max(100, "Character limit of 100 exceeded"),
		email: Yup.string().required("Email is required").email("Invalid email format"),
		message: Yup.string().required("Message is required").min(15, "Minimum 15 characters required").max(700, "Maximum limit of 700 exceeded"),
	});
	const handleSubmit = async (values, { setSubmitting, resetForm }) => {

        // const token = await recaptchaRef.current.executeAsync();
		// recaptchaRef.current.reset();

		// const captchaRes = await fetch('/api/verify-captcha', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({ token }),
		// });
	
		// const { success } = await captchaRes.json();
		// if (!success) setCaptchaError("Captcha failed");

		setStatus('Submitting...');

    	try {
			const response = await fetch(`${baseURL}/api/connects`, {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				},
				body: JSON.stringify({ data: values }),
			});
	  
			if (response.ok) {
				setFormStatus({type: "success", message: "Form submitted successfully!"});
				resetForm(); // Clear the form after submission
			} else {
				setFormStatus({type: "error", message: response.statusText || "An error occurred. Please try again later."});
			}
		} catch (err) {
			console.error(err);
			setFormStatus({type: "error", message: err.message || "An error occurred. Please try again later."});
		}
    	setSubmitting(false);
  	};

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
                <Form className="pt-[82px] space-y-6">
                    { formStatus && formStatus.type === "success" && (
                            <p className="bg-green-500 text-center text-white p-2">{formStatus.message}</p>
                        )
                    }
                    {
                        formStatus && formStatus.type === "error" && (
                            <p className="bg-red-500 text-center text-white p-2">{formStatus.message}</p>
                        )
                    }
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="lg:w-1/2">
                            <Field name="name" type="text" placeholder="Your name" className="w-full bg-transparent border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] text-base text-white focus:border-ocre focus:outline-none" />
                            <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div className="lg:w-1/2 ">
                            <Field name="email" type="email" placeholder="Email" className="w-full bg-transparent border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] text-base text-white focus:border-ocre focus:outline-none" />
                            <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                    </div>

                    <div>
                        <Field name="message" as="textarea" placeholder="Message" className="w-full bg-transparent border-2 border-midgrey mt-[10px] h-[168px] leading-[56px] px-6 rounded-[6px] text-base text-white focus:border-ocre focus:outline-none" />
                        <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
                    </div>

                    <div className="w-full block lg:flex justify-center lg:justify-end">
                        <div className="flex-1">
                            {/* <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
							{
								captchaError && <p className='w-full text-red-500 leading-16'>captchaError</p>
							} */}
                        </div>
                        <button type="submit" disabled={isSubmitting} className="flex-1 bg-ocre text-dark block leading-[56px] lg:leading-[56px] rounded-[6px] w-full text-center text-sm lg:text-lg font-light transition-all hover:bg-gold">
                            <span className="mr-3">
                                {isSubmitting ? "Submitting..." : "Get in touch"}
                            </span>
                            <span className="arrow"></span>
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}