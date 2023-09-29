import Link from "next/link";

export default function NotFound(){
    return(
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-xl pb-4">Sorry, This page is not avialble</h1>
            <Link href={"/Home"} className=" border-solid border-black border">GO back to Home page</Link>
        </div>
    )
}