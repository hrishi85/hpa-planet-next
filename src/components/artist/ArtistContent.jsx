export default function ArtistContent({artist}) {
    <section className="bg-dark my-[5vw] lg:flex">
					<Image className="lg:flex-1 pt-[40px] lg:pt-[80px] pl-[40px] lg:pl-[80px] pb-[40px] lg:pb-[100px] pr-[40px] lg:pr-[110px]" src="/assets/images/artists/portraits/artist1.webp" width={500} height={500} alt="HPA Logo" />

					<article className="lg:pt-[115px] lg:pl-[100px] lg:flex-1">
						<h3 className="text-subtle-gold ml-[30px] lg:ml-[0px] text-[16px] lg:text-[24px] font-medium"> AKA</h3>
						<h1 className="text-subtle-gold text-center lg:text-left text-[32px] lg:text-[48px] font-extrabold"></h1>
						<p className="text-white ml-[30px] lg:ml-[0px] text-sm mt-[65px]">Birthdate : </p>
						<SimpleBar
							className="mt-[25px] custom-scrollbar p-[15px] lg:p-[0px] w-full lg:w-[480px] max-h-none lg:max-h-[300px]"
							forceVisible="y"
							autoHide={false}
						>
							<p className="text-text-grey text-sm">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
							Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
							It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
							</p>
						</SimpleBar>
					</article>
				</section>
}