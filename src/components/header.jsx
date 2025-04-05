import Image from "next/image";
import Link from "next/link";
export default function PageHeader(){
    return(
        <header className="bg-dark">
		<div className="container mx-auto h-[100px] flex justify-between items-center">
			<Link href="/" className="block text-ocre">
				<Image src="/assets/images/HPA-logo.webp" width={144} height={32} alt="HPA Logo" />
			</Link>
		</div>
	</header>
    )
}