import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";

import { useState } from "react";

import CameraSVG from "@/components/SVG/CameraSVG";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const profile = () => {
  const [userImage, setUserImage] = useState("/user.svg");
  const [isEdit, setIsEdit] = useState(false);

  const [userInfo, setUserInfo] = useState({
    name: "Andy Warhol",
    email: "andywarhol@mail.com",
    phone: "+880 123456789",
  });

  const importFile = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = () => {
      const file = input.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target.result);
        toast.success("Image Updated Successfully", {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  const handleUpdate = () => {
    if (userInfo.name && userInfo.email && userInfo.phone) {
      toast.success("Data Updated Successfully", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setIsEdit(false);
    } else {
      toast.warning("You Must Provide Name, Email and Phone", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {/* <ToastContainer /> */}
      <div className="container max-w-[600px]   bg-white dark:bg-[#1C1C25]  rounded-xl p-5">
        <div className="w-fit h-fit rounded-full border-4 flex items-center justify-center relative mx-auto">
          <img
            src={userImage}
            alt=""
            className="w-[200px] h-[200px] rounded-full object-cover"
          />
          <div
            onClick={importFile}
            className="absolute bottom-3 right-0  bg-[#F0F8FF] dark:bg-[#12131A] w-12 h-12 flex items-center justify-center  rounded-full cursor-pointer select-none"
          >
            <CameraSVG />
          </div>
        </div>

        {!isEdit && (
          <div className="my-5 ">
            <h1 className="text-3xl font-semibold text-center">Andy Warhol</h1>

            <p className=" text-[#626D7D] text-lg font-medium text-center my-4">
              andywarhol@mail.com
            </p>

            <p className=" text-[#626D7D] text-lg font-medium text-center">
              +880 123456789
            </p>
          </div>
        )}

        {isEdit && (
          <div className="my-5">
            <div className="w-full mb-3">
              <input
                value={userInfo.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-3 rounded-lg border-[1.5px] border-[#c4cacd66] dark:border-[#c4cacd14] placeholder:text-[15px] outline-none bg-white dark:bg-[#1C1C25]"
              />
            </div>
            <div className="w-full mb-3">
              <input
                value={userInfo.email}
                onChange={handleInputChange}
                name="email"
                required
                type="email"
                placeholder="Email"
                className="w-full px-3 py-3 rounded-lg border-[1.5px] border-[#c4cacd66] dark:border-[#c4cacd14] placeholder:text-[15px] outline-none bg-white dark:bg-[#1C1C25]"
              />
            </div>
            <div className="w-full">
              <input
                value={userInfo.phone}
                onChange={handleInputChange}
                name="phone"
                required
                type="text"
                placeholder="Phone"
                className="w-full px-3 py-3 rounded-lg border-[1.5px] border-[#c4cacd66] dark:border-[#c4cacd14] placeholder:text-[15px] outline-none bg-white dark:bg-[#1C1C25]"
              />
            </div>
          </div>
        )}

        <div class="animated-btn-3 pb-6 text-center select-none">
          {isEdit ? (
            <button class="px-[36px] py-[10px]" onClick={handleUpdate}>
              Submit
            </button>
          ) : (
            <button
              class="px-[50px]  py-[10px]"
              onClick={() => setIsEdit(true)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default profile;

profile.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
