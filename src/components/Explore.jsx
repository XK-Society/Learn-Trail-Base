import React from 'react'

const explores = [
    { id: 1, title: 'TBA', description: 'TBA.' },
    { id: 2, title: 'TBA', description: 'TBA.' },
  ];

const Explore = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl text-bgBar font-bold mb-4">Explore</h2>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {explores.map((explore) => (
          <div key={explore.id} className="bg-third shadow-md rounded-lg p-4">
            <h3 className="text-lg text-white font-semibold mb-2">{explore.title}</h3>
            <p className="text-white text-sm mb-4">{explore.description}</p>
            <button className="bg-bgBar text-white text-sm py-2 px-4 rounded hover:bg-third">
              Continue
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Explore