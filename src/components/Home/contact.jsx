"use client"
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

export default function Contact(){
	const initialValues = {name:"", email:"", msg:""}
	const validationSchema = Yup.object().shape({
		name: Yup.required().string().min(2,"Minimum two characters required").max(100,"Character limit of 100 exceeded"),
		email: Yup.required().email(),
		msg: Yup.required().min(15,"Minimum 15 characters required").max(700,"Maximum limit of 700 exceeded")
	});
	const handleSubmit = (values,{setSubmitting}) => {
		console.log('Form Data:', values);
		setSubmitting(false);
	};
    return(
		<section className="w-full h-screen bg-[url(/assets/images/home-contact-bg.webp)] bg-cover bg-no-repeat bg-bottom">
			<article className="container mx-auto flex py-[10vw] h-full justify-center">
				<div className="w-[900px] h-[633px] px-[63px] py-[63px] bg-[rgba(11,11,11,0.8)] backdrop-blur-[24px] rounded-[16px]">
					<h3 className="text-[24] text-center text-ocre italic">Got a lit track in mind</h3>
					<h1 className="text-[36px] font-bold text-center text-white">Let's Connect</h1>

					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
						{({ isSubmitting }) => (
							<Form className="pt-[82px]">
								<div className="flex space-x-6">
									<Field name="name" type="text" placeholder="Your name" className="w-1/2 bg-transparent border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
									<ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
									<Field name="email" type="email" placeholder="Phone / Email" className="w-1/2 bg-transparent border-2 border-midgrey h-[56px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
									<ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
								</div>
								<Field name="msg" as="textarea" placeholder="Message" className="w-full bg-transparent border-2 border-midgrey mt-[38px] h-[168px] leading-[56px] px-6 rounded-[6px] test-base text-white focus:border-ocre focus:outline-none" />
								<div className="w-full flex justify-end">
									<button type="submit" disabled={"isSubmitting"} className="bg-ocre text-dark block leading-[56px] mt-[38px] rounded-[6px] w-[60%] text-center text-lg font-light transition-all hover:bg-gold">
										<span className="mr-3">{isSubmitting ? "Submitting...":"Share your details"}</span>
										<span className="arrow"></span>
									</button>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</article>
		</section>
    )
}