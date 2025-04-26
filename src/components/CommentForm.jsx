'use client';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const baseURL = process.env.STRAPI_API_URL || 'http://localhost:1337';
const captchaSiteKey = process.env.RECAPTCHA_SITE_KEY;

export default function CommentForm({ newsId, onNewComment }) {

    const [status, setStatus] = useState('');
	const [captchaError, setCaptchaError] = useState(false);
    const initialValues = { name: '', comment: ''};

	const recaptchaRef = useRef();
  
    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required').min(2).max(24),
        comment: Yup.string().required('Comment cannot be empty').min(4).max(100),
    });
	
	const handleSubmit = async (values, { resetForm }) => {

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
			const res = await fetch(`${baseURL}/api/comments`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					data: {
						name: values.name,
						comment: values.comment,
						news: newsId,
					},
				}),
			});
		
			if (!res.ok) throw new Error('Failed to submit comment.');
			setStatus('Comment submitted!');
			const { data } = await res.json();
			onNewComment(data);
			resetForm();
		} catch (err) {
			console.error(err);
			setStatus('Failed to submit comment.');
		}
	};
	
	return (
		<div className="w-full mx-auto mt-6 p-6 rounded-xl">
			<h2 className="text-xl font-semibold mb-4">Leave a Comment</h2>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				<Form className="">
					<div>
						<Field name="name" type="text" placeholder="Your name" className="w-full bg-transparent border-2 border-midgrey mt-[10px] h-[56px] leading-[56px] px-6 rounded-[6px] text-base text-white focus:border-ocre focus:outline-none" />
						<ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
					</div>
					<div>
						<Field as="textarea" name="comment" placeholder="Your comment" className="w-full bg-transparent border-2 border-midgrey mt-[10px] h-[168px] leading-[56px] px-6 rounded-[6px] text-base text-white focus:border-ocre focus:outline-none" />
						<ErrorMessage name="comment" component="div" className="text-red-500 text-sm mt-1" />
					</div>
					<div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="lg:w-1/2">
							{/* <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" />
							{
								captchaError && <p className='w-full text-red-500 leading-16'>captchaError</p>
							} */}
                        </div>
                        <div className="lg:w-1/2 ">
							<button type="submit" className="block w-full bg-subtle-gold hover:scale-105 transition-all h-[56px] leading-[56px] text-white px-4 rounded" >Submit</button>
                        </div>
                    </div>
					{status && <p className="text-sm mt-2 text-green-500">{status}</p>}
				</Form>
			</Formik>
		</div>
	);
}
