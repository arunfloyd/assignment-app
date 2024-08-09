import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import userPic from "../../assets/images/userpic.jpeg";
import { setUserName } from "../../store/userSlice";

function Setting() {
  const fileInputRef = useRef(null);
  const dispatch = useDispatch();
  const { email, name: originalName } = useSelector((state) => state.user);

  const [userName, setUserNameState] = useState(originalName);
  const isNameChanged = userName !== originalName;

  const handleUpdate = () => {
    if (userName && isNameChanged) {
      dispatch(setUserName(userName));
    }
  };

  useEffect(() => {
    setUserNameState(originalName);
  }, [originalName]);

  return (
    <div>
      <h1 className="text-4xl font-bold text-purple-700 mt-8 ml-14">
        Account Settings
      </h1>
      <div className="ml-14 flex items-center">
        <img
          className="w-40 h-40 rounded-full my-14"
          src={userPic}
          alt="userProfile"
        />
        <div className="flex gap-10 ml-10">
          <input type="file" ref={fileInputRef} className="hidden" />

          <div className="flex flex-col">
            <label className="font-semibold mb-2">User Name</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-2 py-1"
              placeholder="username"
              value={userName}
              onChange={(e) => setUserNameState(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-semibold mb-2">Email</label>
            <input
              type="text"
              className="border border-gray-400 rounded-md px-2 py-1"
              placeholder="email"
              value={email}
              readOnly
            />
          </div>
        </div>
        {isNameChanged && (
          <button
            type="submit"
            className="ml-4 border border-purple-900 text-purple-700 font-semibold rounded-md px-4 py-2"
            onClick={handleUpdate}
          >
            Update
          </button>
        )}
      </div>

      <div>
        <h1 className="text-3xl font-bold text-purple-700 mt-8 ml-14">
          Subscriptions
        </h1>
        <div className="w-2/3 h-20 mt-8 px-12 ml-14 flex justify-between rounded-lg bg-gradient-to-r from-purple-600 to-purple-900">
          <div className="flex items-center ml-5">
            <p className="text-stone-100 text-2xl">
              You are currently on the{" "}
              <span className="font-semibold text-xl underline cursor-pointer">
                Ques AI Basic Plan!
              </span>
            </p>
          </div>
          <div className="flex items-center mr-5">
            <button className="w-20 h-8 bg-stone-100 rounded-md font-semibold text-xs text-purple-700">
              Upgrade
            </button>
          </div>
        </div>
        <p className="font-bold text-red-700 ml-14 mt-8 underline cursor-pointer">
          Cancel Subscription
        </p>
      </div>
    </div>
  );
}

export default Setting;


