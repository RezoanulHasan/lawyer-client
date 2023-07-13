import Swal from 'sweetalert2';
import useTitle from '../../../../hooks/useTitle';
import { useState } from 'react';
import axios from 'axios';

const AddService = () => {
  useTitle('Add Services');

  const [name, setName] = useState('');
  const [successRate, setSuccessRate] = useState('');
  const [details, setDetails] = useState('');
  const [successStory, setSuccessStory1] = useState('');
  const [about, setAbout] = useState('');
  const [rating, setRating] = useState('');
  const [uploadedClassImageUrl, setUploadedClassImageUrl] = useState('');

  const img_hosting_token = import.meta.env.VITE_Image_Upload_token;
  const img_hosting_url = 'https://api.imgbb.com/1/upload';

  const handleImageUpload = async (event, setImageUrl) => {
    const file = event.target.files[0];

    // Create a new FormData object
    const formData = new FormData();
    formData.append('image', file);
    formData.append('key', img_hosting_token);

    try {
      // Send a POST request to the ImageBB API
      const response = await axios.post(img_hosting_url, formData);
      const imageUrl = response.data.data.url;

      // Set the uploaded image URL in the state
      setImageUrl(imageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'successRate':
        setSuccessRate(value);
        break;
      case 'details':
        setDetails(value);
        break;
      case 'successStory':
        setSuccessStory1(value);
        break;
      case 'about':
        setAbout(value);
        break;
      case 'rating':
        setRating(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newService = {
      name,
      successRate,
      details,
      successStory,
     about
      ,
      rating,
      photo: uploadedClassImageUrl,
    };

    fetch('http://localhost:5000/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: ' Add Info Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        setName('');
        setSuccessRate('');
        setDetails('');
        setSuccessStory1('');
          setAbout('');
        setRating('');
        setUploadedClassImageUrl('');
      });
  };

  return (
    <div>
      <div className="overflow-hidden">
        <div className=" p-12">
          <h2 className="text-3xl mb-5 text-center text-green-500 font-extrabold">Add Service Info</h2>
          <form onSubmit={handleSubmit}>
            {/* form lName and  success row */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400">Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400">Success Rate</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    placeholder="Success Rate"
                    className="input input-bordered w-full"
                    name="successRate"
                    value={successRate}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
            </div>

            {/* Success Story1 form and Success Story2 */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400">Success Story</span>
                </label>
                <label className="input-group">
                  <textarea
                    placeholder="successStory"
                    name="successStory"
                    className="input input-bordered w-full"
                    value={successStory}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400">About service</span>
                </label>
                <label className="input-group">
                  <textarea
                    placeholder="About service"
                    name="about"
                    className="input input-bordered w-full"
                    value={about}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            {/* Lawyer Num  and  success rate */}
            <div className="md:flex mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text text-yellow-400">Service image </span>
                </label>
                <label className="input-group">
                  <input
                    type="file"
                    accept="image/*"
                    className="input input-bordered w-full"
                    required
                    onChange={(event) => handleImageUpload(event, setUploadedClassImageUrl)}
                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 lg:ml-4">
                <label className="label">
                  <span className="label-text text-yellow-400"> Rating</span>
                </label>
                <label className="input-group">
                  <input
                    name="rating"
                    type="text"
                    placeholder="Success Rating"
                    value={rating}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    required
                  />
                </label>
              </div>
            </div>

            {/* form details */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="textarea"
                  name="details"
                  value={details}
                  onChange={handleChange}
                  placeholder="Enter details"
                  className="input input-bordered w-full rounded-md"
                />
              </label>
            </div>

            {/* submit button */}
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-warning  btn-outline w-full">
               Add service
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
