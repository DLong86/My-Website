import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<div className="fixed w-full h-20 z-[100]">
			<div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
				<h1 className="font-bold text-4xl text-[#B3A576] hover:text-white duration-100 cursor-pointer">
					LOGO.
				</h1>
				<div className="">
					<ul className="uppercase font-bold text-xl hidden md:flex">
						<Link href="/">
							<li className="ml-10 hover:text-[#B3A576] duration-100">Home</li>
						</Link>
						<Link href="/">
							<li className="ml-10 hover:text-[#B3A576] duration-100">About</li>
						</Link>
						<Link href="/">
							<li className="ml-10 hover:text-[#B3A576] duration-100">Bits</li>
						</Link>
						<Link href="/">
							<li className="ml-10 hover:text-[#B3A576] duration-100">
								Skills
							</li>
						</Link>
						<Link href="/">
							<li className="ml-10 hover:text-[#B3A576] duration-100">
								Contact
							</li>
						</Link>
					</ul>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
