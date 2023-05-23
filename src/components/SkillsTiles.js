import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function SkillsTiles() {
  const tiles = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="bg-black">
      <h1 className="text-center mb-8 text-4xl font-extrabold leading-none tracking-normal text-yellow-300 md:text-6xl md:tracking-tight p-8">
        <span> Skills </span>{' '}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
          Acquired
        </span>
      </h1>
      <div className="tiles relative flex flex-wrap p-12 justify-center">
        {tiles.map((tile) => (
          <div key={tile} className="col w-1/4 rounded-lg">
            {Array.from({ length: 4 }).map((box, index) => (
              <Link key={index} to="https://github.com/JeffMuthunga" aria-label={`Box ${index + 1}`} />
            ))}
            <div className="box" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsTiles;
