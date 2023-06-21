import TextEditor from "../components/TextEditor";

const UploadModal = () => {
  return (
    <div className="w-[40rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll">
      <div className="my-[2rem] font-bold text-3xl">Upload a Post</div>
      <div className="w-full flex justify-between gap-[1rem]">
      <div>
      </div>
      
        <span className="flex-1 text-end">Title</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            placeholder="Title"
          />
        </span>
      </div>
      <div className="w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Brief</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            placeholder="Brief"
          />
        </span>
      </div>
      <div className="w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Banner Image URL</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            placeholder="Image Link or Choose File"
          />
        </span>
      </div>
      <div className="w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Category</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <input
            className="w-full border-0 outline-none bg-transparent"
            type="text"
            placeholder="Select Category"
          />
        </span>
      </div>

      <div className="w-full flex justify-between gap-[1rem]">
        <span className="flex-1 text-end">Article Text</span>
        <span className="flex-[5] h-min border-2 border-[#787878]">
          <textarea
            className="w-full border-0 outline-none bg-transparent"
            rows={12}
            placeholder="Brief Explaination About Blog"
          />
        </span>
      <span><TextEditor/></span>
      </div>
      <button className="bg-black text-white py-2 px-4 rounded-full">
        Submit
      </button>
    </div>
  );
};

export default UploadModal;
