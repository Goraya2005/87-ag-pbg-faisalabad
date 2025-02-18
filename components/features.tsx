import Image from 'next/image'; // Import next/image

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4 mx-4 fixed top-0 w-full z-10">
      {/* Left side logo and company name */}
      <div className="flex items-center">
        <Image 
          src="/dna-logo.jpeg" 
          alt="Logo" 
          width={32} 
          height={32} 
          className="mr-2" 
        />
        <span className="text-white font-semibold">87-ag-Agri @ PBG - Faisalabad</span>
      </div>

      {/* Right side links */}
      <div className="flex items-center">
        <a href="/" className="text-white mr-4 hover:text-gray-300">Home</a>
        <a href="../about" className="text-white mr-4 hover:text-gray-300">About</a>
        <a href="../gallery" className="text-white mr-4 hover:text-gray-300">Gallery</a>
        <a href="../events" className="text-white hover:text-gray-300">Events</a>
      </div>
    </nav>
  );
}
