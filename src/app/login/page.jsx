"use client"
import PageFooter from "@/components/footer";
import PageHeader from "@/components/header";
import PagePFooter from "@/components/prefooter";
import Image from "next/image";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useState } from "react";
export default function Login() {
    const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");
    const [passShow,setPassShow] = useState(false);
    // const handleEmailChange =  (event) => {
	// 	if(event.target.value===""){
    //         return false;
    //     }
    //     setEmailText(event.target.value);
    //     console.log(event.target.value);
	// };

    // const handlePasswordChange =  (event) => {
	// 	if(event.target.value===""){
    //         return false;
    //     }
    //     setPasswordText(event.target.value);
    //     console.log(event.target.value);
	// };

    const togglePasswordVisibility = (event) =>{
        setPassShow(!passShow);
    };

    const initialValues = {email: "", password: "" };
    const validationSchema = Yup.object().shape({
            email: Yup.string().required("Email is required").email("Invalid email format"),
            password: Yup.string().required("Password is required").min(6, "Minimum 6 characters required").max(18, "Maximum limit of 18 exceeded")
    });
    const handleSubmit = (values, { setSubmitting }) => {
        console.log("Form Data:", values);
        setSubmitting(false);
    };
    
    
    return (
        <>
            <PageHeader />
            <section className="w-full h-screen bg-darkgrey flex items-center justify-center">
                <article className="container mx-auto bg-dark flex rounded-[16px] w-[550px] h-auto shadow-lg">
                    <section className="flex-1 p-12">
                        <h1 className="text-3xl font-bold text-center text-white">Log In</h1>

                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
						{({ isSubmitting }) => (
                            <Form className="pt-16">
                                <div className="space-y-4">
                                    <div>
                                        <label for="email" className="text-white ml-[1px]">Email *</label>
                                        <Field
                                            name="email"
                                            type="email"
                                            id="email" 
                                            placeholder="Email" 
                                            // onChange={handleEmailChange}
                                            className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full"
                                        />
                                        <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                                    </div>

                                    <div className="mt-[5px] relative">
                                        <label for="password" className="text-white ml-[1px]">Password *</label>
                                        <Field
                                            name="password" 
                                            type={passShow?"text":"password"}
                                            id="password"  
                                            placeholder="Password" 
                                            // onChange={handlePasswordChange}
                                            className="bg-dark border-2 border-midgrey h-14 px-6 rounded-md text-base text-white focus:border-ocre focus:outline-none w-full"
                                        />
                                        <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
                                        <span className="flex h-14 w-14 absolute right-0 top-6 cursor-pointer items-center justify-center" onClick={togglePasswordVisibility}>
                                            <Image src={passShow?"/assets/images/password/hide-pass.svg":"/assets/images/password/show-pass.svg"} width={25} height={25} alt="pass show"/>
                                        </span>
                                    </div>
                                </div>

                                <div className="w-full flex space-x-6 mt-[180px]">
                                    <button className="bg-ocre text-dark block leading-[56px] flex-1 rounded-md  text-center text-lg font-light transition-all hover:bg-gold">
                                        <span className="mr-3">Captcha</span>
                                    </button>
                                    <button className="bg-ocre text-dark block leading-[56px] flex-1 rounded-md text-center text-lg font-light transition-all hover:bg-gold">
                                        <span className="mr-3">Submit</span>
                                    </button>
                                </div>
                            </Form>
                            )}
					</Formik>
                    </section>
                </article>
            </section>
            <PagePFooter />
            <PageFooter />
        </>
        
        
    );
}