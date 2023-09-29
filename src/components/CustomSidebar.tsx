"use client";
import Link from 'next/link'
import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
import { Disclosure } from '@headlessui/react'

function CustomSidebar () {
  return (
    <div>
		<Disclosure as={"nav"}>
			<Disclosure.Button className={"absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-950 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset group hover:bg-gray-900"}>
			    <GiHamburgerMenu 
				className="block md:hidden h-6 w-6"
				aria-hidden="true"
				/>
			</Disclosure.Button> 
			<div className= " fixed top-4 right-4">
					<Link href={"/"} >
					<span className="font-semibold md:hidden uppercase">logo</span>
					</Link>
			</div>
			<div className="h-screen w-screen text-white bg-gray-950 z-20 fixed top-0 -left-full md:w-60 md:left-0 peer-focus:left-0 ease-out delay-150 duration-200">
				<Disclosure.Button className={"absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset group hover:bg-lime-400"}>
					<AiOutlineClose 
					className="block md:hidden h-6 w-6"
					aria-hidden="true"
					/>
				</Disclosure.Button> 
				<div className= " pl-7 pt-2 pb-24">
					<Link href={"/"} >
					<span className="font-semibold max-[767px]:right-5 max-[767px]:top-6 max-[767px]:absolute uppercase">logo</span>
					</Link>
				</div>
				<div className="pr-5">
					<div className=" pl-4 py-0.5 ml-2 mb-6 hover:text-lime-500 ease-out delay-150 duration-200 bg-fuchsia-950 rounded-md">
						<Link href={"/Home"}><div>HOME</div></Link>
					</div>
					<div className=" pl-4 py-0.5 ml-2 mb-6 hover:text-lime-500 ease-out delay-150 duration-200 bg-fuchsia-950 rounded-md">
						<Link href={"/Services"}><div>Services</div></Link>
						</div>
					<div className="pl-4 py-0.5 ml-2 mb-6 hover:text-lime-500 ease-out delay-150 duration-200 bg-fuchsia-950 bg rounded-md">
						<Link href={"/About"}><div>About</div></Link>
					</div>
					<div className=" pl-4 py-0.5 ml-2 mb-6 hover:text-lime-500 ease-out delay-150 duration-200 bg-fuchsia-950 rounded-md">
						<Link href={"/Contact"}><div>Contact</div></Link> 
					</div>
				</div>
			</div>
		</Disclosure>
    </div>
  )
}

export default CustomSidebar