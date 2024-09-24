import React from "react";

const LearningPage: React.FC = () => {
  const elements = [
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
    "Element 1",
    "Element 2",
    "Element 3",
    "Element 4",
  ];

  return (
    <div className="text-white p-5">
      <div className="flex items-center">
        {/* <img
                src="https://via.placeholder.com/150"
                alt="Placeholder"
                className="mr-5"
            /> */}
        <div>
          <h1 className="text-2xl font-bold">Title</h1>
          <p className="mt-2">
            Description of the page goes here. This is a brief description to
            give an overview of the content.
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-5">
        <div className="pr-5 min-w-20">
          <h2 className="text-xl font-semibold">Table of Contents</h2>
          <ul className="list-disc list-inside mt-2">
            {elements.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-grow bg-green-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {elements.map((element, index) => (
              <div key={index} className="border border-gray-300 p-3 rounded">
                {element}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
// import React from 'react';

// const LearningPage: React.FC = () => {
//     const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

//     return (
//         <div style={{ padding: '20px' }}>
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <img
//                     src="https://via.placeholder.com/150"
//                     alt="Placeholder"
//                     style={{ marginRight: '20px' }}
//                 />
//                 <div>
//                     <h1>Title</h1>
//                     <p>Description of the page goes here. This is a brief description to give an overview of the content.</p>
//                 </div>
//             </div>
//             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px', marginTop: '20px' }}>
//                 {elements.map((element, index) => (
//                     <div key={index} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
//                         {element}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default LearningPage;
