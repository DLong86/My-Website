"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
	const pathname = usePathname();
	const [nav, setNav] = useState(false);
	const [isActive, setIsActive] = useState(true);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-20 z-[100]">
			<div className="flex items-center justify-between w-full h-full px-2 md:px-16">
				<h1 className="font-bold text-4xl hover:text-[#B3A576] duration-100 cursor-pointer">
					LOGO.
				</h1>
				<div>
					{/* below!!!!!! - Check current!!!!!! */}
					<ul
						onClick={() => setIsActive(!isActive)}
						className="uppercase font-bold text-lg  hidden md:flex lg:text-xl"
					>
						<Link href="/">
							<li
								className={`ml-10 ${
									pathname === "/" ? "text-[#B3A576]" : "text-white"
								}duration-100 hover:text-[#B3A576]`}
							>
								Home
							</li>
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
					<div
						className="cursor-pointer text-[#B3A576] duration-100 md:hidden pr-5"
						onClick={() => setIsActive(!isActive)}
					>
						{isActive ? (
							<TbMenu size={30} onClick={handleNav} />
						) : (
							<AiOutlineClose size={30} onClick={handleNav} />
						)}
					</div>
				</div>
			</div>
			<div
				className={
					nav
						? "md:hidden fixed left-0 top-0 w-[40%] sm:w-[45%] h-screen bg-white ease-in duration-200"
						: "fixed left-[-100%] top-0 w-[70%] sm:w-[45%] h-screen bg-white ease-in duration-300"
				}
			>
				<div className="pt-8 sm:pt-0">
					<div className="flex w-full items-center justify-between">
						{/* <h1 className="font-bold text-4xl text-[#B3A576] py-5 px-6 sm:pb-0 duration-100 cursor-pointer">
							LOGO.
						</h1> */}
					</div>
					<div className="flex flex-col justify-between items-start">
						<ul className="text-xl ml-6 font-bold uppercase">
							<Link href="/">
								<li className="text-black py-5 pt-[60px] hover:text-[#B3A576] duration-100">
									Home
								</li>
							</Link>
							<Link href="/">
								<li className="text-black py-5 hover:text-[#B3A576] duration-100">
									About
								</li>
							</Link>
							<Link href="/">
								<li className="text-black py-5 hover:text-[#B3A576] duration-100">
									Bits
								</li>
							</Link>
							<Link href="/">
								<li className="text-black py-5 hover:text-[#B3A576] duration-100">
									Skills
								</li>
							</Link>
							<Link href="/">
								<li className="text-black py-5 hover:text-[#B3A576] duration-100">
									Contact
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
