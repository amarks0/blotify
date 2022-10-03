import React from "react";
import {
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoPlayCircleSharp,
  IoShuffle,
  IoRepeat,
  IoHeartOutline,
} from "react-icons/io5";
import {
  TbBrowser,
  TbMicrophone2,
  TbDeviceSpeaker,
  TbPlaylist,
  TbVolume2,
  TbArrowsDiagonal,
} from "react-icons/tb";
import record from "../../data/sample_record.json";
// album images https://i.scdn.co/image/ab67616d00001e020ab4d3e1c0b5c5e453287a4c 150w, https://i.scdn.co/image/ab67616d00001e020ab4d3e1c0b5c5e453287a4c 300w, https://i.scdn.co/image/ab67616d0000b2730ab4d3e1c0b5c5e453287a4c 320w, https://i.scdn.co/image/ab67616d0000b2730ab4d3e1c0b5c5e453287a4c 640w
//rafce
const Player = () => {
  return (
    <div className="w-full h-[86px] absolute bottom-0 bg-black p-3">
      <div className="grid grid-cols-3">
        <div className="flex flex-row">
          <img
            className="w-16 h-16 border border-black rounded-sm cursor-pointer hover:border-indigo-600 hover:shadow-lg"
            src={record["album-cover"]}
            alt={record["song-album"]}
          />
          <div className="flex flex-col pl-4 space-y-1 place-content-center">
            <span className="text-sm font-bold cursor-pointer hover:underline hover:text-indigo-300">{record["song-title"]}</span>
            <span className="text-xs text-gray-300 cursor-pointer hover:text-indigo-300 hover:underline">{record["song-artist"]}</span>
          </div>
          <div className="flex flex-row items-center pl-4 space-x-2 place-content-center">
            <IoHeartOutline className="w-6 h-6 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <TbBrowser className="w-6 h-6 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-row items-center justify-center mb-2 space-x-6">
            <IoShuffle className="w-6 h-6 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <IoPlaySkipBack className="w-6 h-6 cursor-pointer hover:fill-indigo-500 stroke-gray-300" />
            <IoPlayCircleSharp className="cursor-pointer w-7 h-7 hover:fill-indigo-500" />
            <IoPlaySkipForward className="w-6 h-6 cursor-pointer hover:fill-indigo-500 stroke-gray-300" />
            <IoRepeat className="w-6 h-6 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
          </div>
          <div className="flex flex-row items-center">
            <span className="pr-2 text-xs text-left">0:15</span>
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div
                className="bg-indigo-500 h-1.5 rounded-full hover:bg-green-600"
                style={{ width: "15%" }}
              ></div>
            </div>
            <span className="pl-2 text-xs text-right">{record["song-length"]}</span>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end space-x-2">
            <TbMicrophone2 className="w-5 h-5 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <TbPlaylist className="w-5 h-5 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <TbDeviceSpeaker className="w-5 h-5 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <TbVolume2 className="w-5 h-5 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
            <div className="flex items-center w-1/3 h-1 bg-gray-800">
              <div
                className="bg-indigo-500 h-1.5 rounded-full hover:bg-green-600"
                style={{ width: "75%" }}
              ></div>
            </div>
            <TbArrowsDiagonal className="w-5 h-5 cursor-pointer hover:stroke-indigo-500 stroke-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default Player;
