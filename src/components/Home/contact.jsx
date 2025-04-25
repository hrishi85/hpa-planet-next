import ContactForm from "../ContactForm";

export default function Contact() {
  	return (
		<section className="w-full min-h-screen bg-[url(/assets/images/home-contact-bg.webp)] bg-cover bg-no-repeat bg-bottom">
			<article className="container mx-auto flex py-[10vw] h-full justify-center">
				<div className="w-[90%] lg:w-[900px] h-auto p-[30px] lg:p-[63px] bg-[rgba(11,11,11,0.8)] backdrop-blur-[24px] rounded-[16px]">
					<h3 className="text-base lg:text-[24px] text-center text-ocre italic">Got a lit track in mind</h3>
					<h1 className="text-[24px] lg:text-[36px] font-bold text-center text-white">Let's Connect</h1>
					<ContactForm />
				</div>
			</article>
		</section>
	);
}
