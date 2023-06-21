import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Modal from "react-modal";
import { Button, Label, TextInput } from "flowbite-react";
import { toast } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Profile = () => {
  let subtitle;
  const { user, updateUserDetails } = useContext(AuthContext);
  useTitle(user.email)
//   console.log(user.displayName);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = '#2caf5c';
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleUpdate=event=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    updateUserDetails(name, photo)
    .then(()=>{
        form.reset();
        toast.success('Successfully updated!!');
    })
    .catch()
  }
  return (
    <div className="bg-white py-4">
      <div className="text-center pt-20">
        <h2
          className="text-green-400 px-4 text-4xl font-medium border-b-4 inline-block "
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Profile
        </h2>
      </div>
      <div className="flex justify-center gap-12 mt-8">
        <div>
          <img className="rounded-full h-60" src={user.photoURL} alt="" />
        </div>
        <div>
          <p>
            <span className="font-bold text-xl">Name: </span>
            {user.displayName}
          </p>
          <p>
            <span className="font-bold text-xl">Email: </span>
            {user.email}
          </p>
        </div>
      </div>
      <button className="bg-green-400 text-white block mx-auto px-4 py-2 mt-4" onClick={openModal}>
        Edit Profile
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <form onSubmit={handleUpdate} className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
          Update profile information
        </h3>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="name"
              value="Your name"
            />
          </div>
          <TextInput
            id="name"
            name="name"
            required={true}
            placeholder="your desired name here"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="url"
              value="Your photo URL"
            />
          </div>
          <TextInput
            id="photoURL"
            name="photo"
            type="text"
            required={true}
          />
        </div>
        <div className="flex justify-between">
          <button ref={(_subtitle) => (subtitle = _subtitle)} className="outline px-4 py-2 rounded outline-green-400 bg-white text-green-400 me-2 md:me-0">
            Update Profile
          </button>
        <button className="bg-green-400 hover:bg-green-600 text-white px-2 py-1 rounded-md" onClick={closeModal}>Close</button>
        </div>
      </form>
      </Modal>
    </div>
  );
};

export default Profile;
