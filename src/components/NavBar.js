import React from 'react'

function NavBar() {
  const downloadCV = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '../images/jeffcv.pdf'; 
    downloadLink.download = 'jeffcv.pdf'; 
    downloadLink.click();
  }

  return (
    <nav className="py-8 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-grid">
          <h1 className="text-3xl font-bold font-sans">Jeff</h1>
          <h1 className="text-3xl text-rose-700">Wainaina</h1>
        </div>
          <button
      className="rounded-lg text-white py-2 px-4 bg-rose-600 hover:bg-rose-700 text-lg transition-colors duration-300 md:w-32 md:text-base lg:w-40"
      onClick={downloadCV}
    >
      Download CV
    </button>
      </div>
    </nav>
  )
}

export default NavBar