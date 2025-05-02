export const Posts = () => {
  return (
    <div className="lg:flex flex-1 items-start justify-center gap-20 lg:mx-20 mx-0  my-10">
      <div className="flex items-center justify-center mx-auto">
      <section className="border p-5 rounded lg:mx-auto mx-3 mb-5 lg:w-[470px]  w-[370px]">
        <h2 className="text-xl font-semibold text-gray-800">
          Generate Image with prompt
        </h2>
        <p className="text-md my-1"> Write your prompt according to the image you want to generate!</p>
        <form>
          <label>Author name</label>
          <br />
          <input
            type="text"
            placeholder="Enter your name..."
            className="py-3 px-4 outline-none border-2 w-full rounded"
          />
          <br />
          <label>Prompt</label>
          <br />
          <textarea
            type="text"
            placeholder=" Type your prompt here..."
            className="py-3 px-4 outline-none border-2 w-full rounded"
          />
          <p className="text-xs my-2">
            You can post the AI Generated Image to showcase in the community!
          </p>
          <div className="flex items-center justify-center mx-auto w-1/2">
          <button type="submit" className="w-full py-2 px-3 text-center font-medium border-2 rounded bg-blue-700  text-gray-200 cursor-pointer">Generate Image</button>
          </div>
        </form>
      </section>
      </div>
      <div className="flex items-center justify-center lg:w-[470px] h-90  bg-gray-50">
        <img src="" alt="" className="lg:w-full h-full w-[370px]" />
      </div>
    </div>
  );
};