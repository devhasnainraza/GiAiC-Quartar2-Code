// import Header from "@/components/header";

export default function Home() {
  return (
    // <div className="bg-red-400 text-blue-500 w-12 h-12  ">
    //   Hello World
    //   </div>

    //  main div //
    
  <div className="text-white">

{/* <Header /> */}

<div className="  h-11 flex justify-between px-7 shadow-2x1 bg-gray-500 ">

<div>LOGO</div>

<div className=" flex px-4 mx-5 gap-4">
<div className="curser-pointer">Home</div>
<div className="curser-pointer">About</div>
<div className="curser-pointer">Services</div>
<div className="curser-pointer">Contact Us</div>
</div>
   </div>


    <div className="bg-black h-screen flex ">

      <div className="w-1/2 h-48 bg-cyan-400 ">Content</div>
      <div className="w-1/2 h-48 bg-purple-300 "></div>

      </div>
      
      </div>
  ) 
}
