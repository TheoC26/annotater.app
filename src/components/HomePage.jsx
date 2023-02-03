import React from "react";

const HomePage = ({ text, setText, setPage, setSource }) => {
  return (
    <div className="mx-12 flex flex-col justify-center align-middle">
      <div className="flex justify-center">
        <div className="bg-gradient-to-r font-black text-3xl bg-clip-text from-purple to-blue text-transparent text-center justify-self-center w-auto sm:text-4xl">
          summarize, analyze, annotate
        </div>
      </div>
      <div className="flex justify-center my-6 mb-3 sm:my-8 sm:mb-3">
        <label
          className="bg-grey cursor-pointer font-bold p-3 px-4 w-auto rounded-2xl text-base sm:text-xl text-gray-700"
          htmlFor="pdf-upload"
        >
          Upload PDF
        </label>
        <input
          className="hidden"
          type="file"
          accept=".pdf"
          id="pdf-upload"
          onChange={(e) => {
            setPage(1);
            setSource(e.target.files[0]);
            console.log(e.target.files[0]);
          }}
        />
      </div>
      <div className="flex justify-center">
        <div className="text-base font-black text-gray-700">OR</div>
      </div>
      <div className="border-12 border-grey bg-grey m-8 mt-3 mx-3 p-5 text-base font-medium rounded-3xl sm:mx-28 lg:mx-48 ">
        <textarea
          className="bg-grey p-3 text-sm font-medium rounded-3xl resize-none outline-none w-full"
          placeholder="Paste text here... (1000 characters min, 5000 characters max)"
          name="source-text"
          id="source-text"
          cols="30"
          rows="15"
          maxLength="10000"
          onChange={(e) => setText(e.target.value)}
          value={text}
        ></textarea>
        <div className={`mx-3 ${(text.length > 1000 && text.length < 5000) ? "text-purple" : "text-gray-700"}`}>
          {text.length}/5000
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className={`${
            text.length > 1000 && text.length < 5000
              ? "bg-purple"
              : "bg-grey text-gray-500"
          } cursor-pointer text-2xl p-3 px-6 rounded-2xl font-bold transition-all duration-200 ease-in-out text-gray-700`}
          onClick={() => {
            text.length > 1000 && text.length < 5000 && setPage("info");
          }}
        >
          Annotate!
        </div>
      </div>
    </div>
  );
};

export default HomePage;