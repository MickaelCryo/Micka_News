//------------------------------------------------------

export default function TopBar() {
  return (
    <div className="bg-red-600 w-full h-16">
      <div className="grid grid-cols-2 gap-6 content-center">
        {/* Left */}
        <div className="flex flex-col items-center">
          <h2 className="text-white	font-bold">The Micka News</h2>
          <h6 className="text-white	text-sm">News & Lifestyle Magazine</h6>
        </div>
        {/* Right */}
        <div className="flex justify-center items-center">
          <a href="/" className="text-white">
            Login
          </a>
          <a href="/" className="text-white mx-4">
            Register
          </a>
          <input placeholder="Search" />
        </div>
      </div>
    </div>
  );
}
