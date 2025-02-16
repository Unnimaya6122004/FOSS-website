import React from "react";

const softwareList = [
  {
    name: "Linux",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png",
    link: "https://en.wikipedia.org/wiki/Linux",
    description: "Linux is a family of open-source Unix-like operating systems based on the Linux kernel."
  },
  {
    name: "Firefox",
    img: "https://cdn0.iconfinder.com/data/icons/mozilla-icons/256/firefox_png.png",
    link: "https://en.wikipedia.org/wiki/Mozilla_Firefox",
    description: "Mozilla Firefox is a free and open-source web browser developed by the Mozilla Foundation."
  },
  {
    name: "LibreOffice",
    img: "https://static-00.iconduck.com/assets.00/libreoffice-writer-icon-512x506-jkg6de1q.png",
    link: "https://en.wikipedia.org/wiki/LibreOffice",
    description: "LibreOffice is a free and open-source office suite, developed by The Document Foundation."
  },
  {
    name: "GIMP",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6867bddd-33d5-4cf2-940b-f8620866dcdf/de5va30-bf0d76a2-0fa7-4cff-87f8-992c4847f797.png",
    link: "https://en.wikipedia.org/wiki/GIMP",
    description: "GIMP is a free and open-source raster graphics editor used for image editing and retouching."
  }
];

const SoftwareCard = ({ software }) => {
  return (
    <a
      href={software.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-5 bg-white rounded-lg shadow-lg transition-transform hover:-translate-y-2"
    >
      <img
        src={software.img}
        alt={software.name}
        className="w-32 h-32 mx-auto rounded"
      />
      <h2 className="text-xl font-semibold text-center text-blue-900 mt-4">
        {software.name}
      </h2>
      <p className="text-center text-gray-600 mt-2">{software.description}</p>
    </a>
  );
};

const FOSSUniverse = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Software Information
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {softwareList.map((software, index) => (
          <SoftwareCard key={index} software={software} />
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          className="px-5 py-3 bg-blue-900 text-white rounded-lg text-lg hover:bg-blue-700"
          onClick={() => window.location.href = 'foss.html'}
        >
          Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default FOSSUniverse;
