import { Image } from "next/image";
import { useState } from "react";

export default function Home() {
	const [emailText, setEmailText] = useState("");
	const [passwordText, setPasswordText] = useState("");

	const handleEmailChange =  () => {
		console.log("test");
	};

	return (
		<h1 onChange={handleEmailChange}>Test</h1>
	);
}
