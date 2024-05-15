import React from 'react'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
function Home() {
  const [videoSrc, setVideoSrc] = useState(null);

  useEffect(() => {
      // Dynamically import the video file
      import('../../../public/Agriculture.mp4').then((module) => {
          setVideoSrc(module.default);
      }).catch((error) => {
          console.error('Error loading video:', error);
      });
  }, []);
    const features = [
        "Farmer's Hub",
        "Direct Trade",
        "Community Marketplace",
        "Fresh Harvest",
        "Fair Trade",
        "Transparent Market",
        "Local Produce"
      ];
    
      const [currentFeature, setCurrentFeature] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentFeature((prevFeature) => (prevFeature + 1) % features.length);
        }, 3000); // Change item every 3000 milliseconds (3 seconds)
    
        return () => clearInterval(timer);
      }, []);
  return (
    <>
        <div class="flex flex-col justify-center h-full py-12">
        <div class="self-center items-center flex flex-col sm:flex-row w-full md:w-5/6 xl:w-2/3 px-4 sm:px-0">
            <div class="w-full text-center sm:text-left sm:w-1/2 py-12 sm:px-8 justify-center">
            <h1 class="tracking-wide text-purple-600 text-2xl mb-6">
            Localized Agriculture Marketplace: <span class="text-gray-800 font-bold tracking tracking-widest">AWE.SOME</span>
            </h1>
            <h2 class="font-bold tracking-widest text-4xl text-green-300">
                Intro goes here...
            </h2>
            <span className="block font-light text-browngray text-2xl my-6">
              <ul>
                <li className="xl:pl-3 fade-in-out">{features[currentFeature]}</li>
              </ul>
            </span>
            <p class="font-bold tracking-widest text-4xl text-green-300">...think about it!</p>
            </div>
            <div className="w-full sm:w-1/2">
                {/* Rest of your component */}
                {videoSrc && (
                    <video className="w-full" height="auto" controls>
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>

        </div>
        </div>
        <div class="flex flex-row w-full justify-center pb-12">
        <Link to="/about" className="px-10 py-2 text-gray-100 text-bold bg-green-300 rounded-full shadow-md text-lg hover:bg-gray-500 hover:border-red">
          More Information
        </Link>
        </div>
    </>
  )
}

export default Home