export default function Experience() {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-8">Experience</h1>

      <div className="relative">
        <div className="absolute left-1.5 top-2 h-full w-0.5 bg-gray-700" />
        <div className="space-y-10">
          <div className="relative">
            <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-[#3abef9] bg-black" />
            <div className="ml-8">
              <h2 className="text-[#3abef9] text-xl">WebRise Solution</h2>
              <h3 className="text-white text-xl font-semibold mb-1">
                Full-Stack Developer • Part-Time
              </h3>
              <p className="text-gray-400 mb-3">October, 2023 - Present</p>
              <p className="text-gray-300 text-sm">
                Designing user-friendly frontends, developing backend
                functionality, managing databases, and working with designers to
                create seamless, efficient web applications while solving
                technical challenges and turning ideas into practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
