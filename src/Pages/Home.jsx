import {React,  useState } from "react";
import { FaSearch } from "react-icons/fa";
const images = [
  {
    imageUrl:
      "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    author: "John Doe",
    prompt: "A beautiful sunset",
  },
  {
    imageUrl:
      "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    author: "John Doe",
    prompt: "A beautiful sunset",
  },
  {
    imageUrl:
      "https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg",
    author: "John Doe",
    prompt: "A beautiful sunset",
  },
];
export const Home = () => {
  const [searchTerm,SetSearchTerm] = useState();
  const handleChange = (e) => {
    SetSearchTerm(e.target.value);
    console.log(searchTerm);
  }
    const filteredImages = searchTerm ?images.filter((image) => {
      return Object.values(image).some((value) => {
        value.includes(searchTerm)
      })
    })
    :images;
  
  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      {/* for top heading and search bar  */}
      <div className="my-8">
        <h2 className="sm:text-4xl text-3xl font-semibold text-gray-950">
          Explore popular posts in the Community!
        </h2>
        <h3 className="text-3xl font-semibold text-green-700 text-center mt-3">
          Generated with AI By HLP
        </h3>
        <form className="flex gap-2 w-full p-2 my-5/0  border-2  border-gray-300 rounded-md">
          <button>
            <FaSearch className="text-xl cursor-pointer" />
          </button>
          <input
            type="text"
            placeholder="Search for a post"
            name="prompt"
            className="w-full outline-none p-2 rounded-md "
            onChange={handleChange}
          />
        </form>
      </div>

      {/*for images   */}
      <div className="flex flex-wrap  gap-5 items-center justify-center">
        {filteredImages?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              {/* div for image  */}
              <div className="flex items-center justify-center">
                <img src={item.imageUrl} alt={item.prompt} className="w-[300px]" />
              </div>
              {/* div for description  */}
              <div className="flex items-start justify-between gap-20 -mt-12 font-bold text-white">
                {/* author and prompt  div */}
                <div>
                  <p>{item.author}</p>
                  <p>{item.prompt}</p>
                </div>
                {/* div for download  */}
                <div>download</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};