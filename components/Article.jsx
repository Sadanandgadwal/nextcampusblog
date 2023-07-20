import React, { useEffect, useState } from "react";
import Image from "next/image";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import axios from "axios";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import { useSpeechSynthesis, SpeechSynthesis } from "react-speech-kit";
import Pimg from "../static/IMG_3488.jpg";
import Articleimage from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";
import logo from "../static/martin-sanchez-G78c3DPmD_A-unsplash.jpg";

import { formatDateTime } from "./utility";

const ArticleMain = () => {
  const [blogData, setBlogData] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  // const { speak, cancel, speaking, supported } = useSpeechSynthesis();

  let blogId;
  const handleLike = async () => {
    let url = window.location.href;
    blogId = url.substring(url.lastIndexOf("/") + 1);
    console.log("--------", blogId);
    localStorage.setItem("user_id", response.data.data._doc.id);
    localStorage.getItem("user_id");
    console.log("------------", user_id);
  };

  const handleDislike = async () => {};

  const handleComment = () => {
    // Add your logic to handle comments
  };
  const handleShare = () => {
    //setShowPopup(true);
    // Add your logic to handle sharing
  };
  useEffect(() => {
    let fetchBlogData = async () => {
      let url = window.location.href;
      blogId = url.substring(url.lastIndexOf("/") + 1);
      if (blogId) {
        const apiUrl = `/api/blog/${blogId}`;
        try {
          const response = await axios.post(apiUrl);
          console.log(response.data.data);
          setBlogData(response.data.data);
        } catch (error) {
          console.error("Error:", error);
        }
      } else {
        console.error("Blog ID not found in the URL.");
      }
    };
    fetchBlogData();
  }, []);
  if (blogData) {
    const { title, content, date, images, Author } = blogData;
    const handleSpeak = () => {
      speak({ text: [Author, title, content] });
    };

    const handleCancel = () => {
      cancel();
    };
    return (
      <div className="flex items-center justify-center flex-[3] border-l border-r ">
        <div className="h-screen overflow-scroll p-[2rem]">
          <>
            <div className="flex justify-between items-center mt-[2.2rem] mb-[1.2rem]">
              <div className="flex gap-[1rem]">
                <div className="h-[3rem] w-[3rem] grid center rounded-full overflow-hidden">
                  <Image
                    className="object-cover"
                    src={Pimg}
                    alt="author"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div>{Author}</div>
                  <div className="flex gap-[.2rem] text-[#787878]">
                    {/* <div>
                      {supported ? (
                        <div>
                          <button onClick={handleSpeak} disabled={speaking}>
                            <PlayCircleFilledWhiteIcon />
                          </button>
                          <button onClick={handleCancel}>Cancel</button>
                        </div>
                      ) : (
                        <div>Text-to-speech not supported</div>
                      )}
                    </div> */}
                    <span className="flex items-center gap-[.2rem] text-[#3B91F8]"></span>
                  </div>
                </div>
              </div>
              <div className="flex gap-[1rem] text-[#787878] cursor-pointer">
                <ThumbUpIcon
                  className="h-5 w-5 cursor-pointer {likes > 0 ? 'border-blue-500' : ''}"
                  onClick={handleLike}
                />
                <ThumbDownIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleDislike}
                />
                <CommentIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleComment}
                />
                <ShareIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleShare}
                />
                <BookmarkBorderIcon
                  className="h-5 w-5 cursor-pointer"
                  onClick={handleShare}
                />
                <div className="w-[.5rem]" />
                <BookmarkIcon />
                <MoreHorizIcon />
              </div>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <div className="h-[18rem] w-full grid center overflow-hidden mb-[2rem]">
                <img src={images} alt="thumbnail" height={120} width={500} />
              </div>
              <h1 className="font-bold text-3xl">{title}</h1>
              <h4 className="font-mediumSerifItalic text-[1.4rem] text-[#292929]">
                <div>{formatDateTime(date)}</div>
                <div>{content}</div>
              </h4>
              <div className="font-mediumSerif text-[1.4rem] text-[#292929]">
                {content[0].text}
              </div>
            </div>
            <div className="flex items-start space-x-4 py-8">
              <div className="flex-shrink-0">
                <Image
                  className="inline-block h-10 w-10 rounded-full"
                  src={Pimg}
                  alt=""
                />
              </div>

              <div className="min-w-0 flex-1">
                <form action="#" className="relative">
                  <div className="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 ">
                    <label for="comment" className="sr-only">
                      Add your comment
                    </label>
                    <textarea
                      rows="3"
                      name="comment"
                      id="comment"
                      className="block w-full resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Add your comment..."
                    ></textarea>

                    <div className="py-2" aria-hidden="true">
                      <div className="py-px">
                        <div className="h-9"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
                        >
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Attach a file</span>
                        </button>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm "
                      >
                        Post
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        </div>
      </div>
    );
  }
};
export default ArticleMain;
