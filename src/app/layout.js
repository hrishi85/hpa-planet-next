import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "HPA Planet | Independent music label dedicated to bringing you the best in official music videos",
	description: "Independent music label dedicated to bringing you the best in official music videos, lyric videos, and official visualizers. At HPA PLANET, you'll experience fresh, original content that showcases my journey and vision as an artist, combining sound and stunning visuals to create a one-of-a-kind experience.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} bg-darkgrey`}>
				{children}
			</body>
		</html>
	);
}
