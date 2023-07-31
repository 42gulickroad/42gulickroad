import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
          

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
            
              {/* 3rd block */}
              

              {/* 4th block */}
              

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">


            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Bill Hare - familyhare@gmail.com</div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
