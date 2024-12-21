import React, { useState } from "react";
import myPic from "../my_pic.jpg";

const profiles = [
  {
    name: "Jordan Okeke",
    location: "Pretoria, South Africa",
    image: myPic,
  },
  {
    name: "Roland Olagbaye",
    location: "London, United Kingdom",
    image: myPic,
  },
  {
    name: "Seun Ayomide",
    location: "Lagos, Nigeria",
    image: myPic,
  },
  {
    name: "Fredrick Apata",
    location: "Ogun, Nigeria",
    image: myPic,
  },
  {
    name: "Princess Sonnaike",
    location: "Ibadan, Nigeria",
    image: myPic,
  },
];

const ProfileCard = ({ name, location, image, onClick }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
      onClick={onClick}
    >
      <img src={image} alt={name} className="w-full h-auto object-cover" />
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-gray-300">{location}</p>
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  return (
    <>
      {/* Profile Grid Section */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <ProfileCard
              key={index}
              name={profile.name}
              location={profile.location}
              image={profile.image}
              onClick={() => setSelectedProfile(profile)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedProfile(null)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-semibold text-gray-800">
                {selectedProfile.name}
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                {selectedProfile.location}
              </p>
              <p className="mt-4 text-gray-700 text-base">
                {/* Add a description if available */}
                This is a detailed description about {selectedProfile.name}. You
                can provide additional information about their work, hobbies, or
                background here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileGrid;
