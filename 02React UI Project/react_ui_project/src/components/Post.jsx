import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { FaShareSquare } from "react-icons/fa";

const Post = () => {
  return (
    <>
      <div class="post_container">
        <div class="person">
          <div class="auther">
            <div class="img">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/27/13/25/city-2178705_1280.jpg"
                alt=""
              />
            </div>
            <div class="text">
              <h4>Post Text</h4>
              <p>Belong from Pc</p>
            </div>
          </div>
          <div class="dot">{<HiOutlineDotsVertical />}</div>
        </div>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          rerum?
        </p>
        <div class="post_img">
          <img
            src="https://cdn.pixabay.com/photo/2015/09/12/00/46/buildings-936589_960_720.jpg"
            alt=""
          />
        </div>
        <div class="likes_coment">
          <div class="likes">{<FaHeart class="items" />} 4.3k</div>
          <div class="comment">{<FaComment class="items" />}10.2k</div>
          <div class="share">{<FaShareSquare class="items" />}7.5k</div>
        </div>
      </div>
    </>
  );
};

export default Post;
