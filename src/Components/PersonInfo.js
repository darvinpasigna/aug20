import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';


function PersonalInfo() {
  const userUrl = "http://localhost/PP5/1stPP5/dbcon.php";
  const [userInfo, setUserInfo] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState();
  const [arr, setArr] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

const handleImage =()=>{
  if (userInfo.image === " "){
    return ('../Images/Carousel1.jpg');
  }else {
    return (userInfo.image);
  }
}

  const handleSave = (event) => {
    event.preventDefault();
    let getData = new FormData();
    getData.append('image', image);
    getData.append('function', 'image');
    
    axios({
      method: "POST",
      url: userUrl,
      data: getData,
      config: {header: 'Content-Type: multipart/form-data'}
    }).then(() => {
      axios.get(userUrl).then((response) => {
        console.log(response.data);
        setArr(response.data);
        setImage("");
        
      })
    })
}

  useEffect(() => {
    fetch(userUrl)
      .then((response) => response.json())
      .then((data) => {
        setUserInfo(data[0]);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [userUrl]);

  return (
    <div className="container">
      {userInfo && (
        <div className="row">
          <div className="col-6">
          {userInfo.image ? (
              <img
                onChange={()=> handleImage()}
                src={require('../Images/' + userInfo.image)}
                alt="profilepic"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{ width: '100%', 
              height: '100%', 
              backgroundColor: 'lightgray', 
              display: 'flex', alignItems: 'center', 
              justifyContent: 'center' }}>
                <span>No Image Available</span>
              </div>
            )}
          </div>
          <div className="personaldetail col-6">
            <form>
              <fieldset>
                <h5 style={{ color: "lightgray"}}>First Name: <strong style={{color: "white"}}>{userInfo.firstname}</strong> </h5>
                <h5 style={{ color: "lightgray" }}>Last Name: <strong style={{color: "white"}}>{userInfo.lastname}</strong> </h5>
                <h5 style={{ color: "lightgray" }}>Email: <strong style={{color: "white"}}>{userInfo.email}</strong></h5>
                <br />
                <div className="d-flex">
                  <label style={{ color: "lightgray", marginRight: "10px" }}>Gender:</label>
                  <select
                    style={{ width: "150px", marginRight: "100px" }}
                    className="form-select"
                    name="gender"
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  <br />
                  <label style={{ color: "lightgray" }}>Birthdate: </label>
                  <input
                    style={{ width: "150px" }}
                    className="form-control"
                    type="date"
                    name="birthdate"
                  />
                </div>
                <br />
                <h6 style={{ color: "lightgray" }}>Address: <strong style={{color: "white"}}>{userInfo.address}</strong></h6>
                <br />
                <h6 style={{ color: "lightgray" }}>City: <strong style={{color: "white"}}>{userInfo.city}</strong></h6>
                <br />
                <input
                  className="form-control"
                  type="text"
                  name="province"
                  placeholder="Province"
                />
                <br />
                <label style={{ color: "lightgray", marginRight: "10px" }}>ZIP CODE:</label>
                <input
                  className="form-control"
                  type="number"
                  name="zip"
                  placeholder="1234"
                /> <br />
             <div className="input-group input-group-sm mb-3">
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                    value={image}
                    style={{ width: 'auto' }}
                  />
                  {imagePreview && (
                    <div className="mb-3">
                      <img src={imagePreview} alt="Preview" style={{ width: "20%" }} />
                    </div>
                  )}
                </div>
                <br /> <br />
                <button
                  style={{ width: "200px" }}
                  type="submit"
                  className="btn btn-success"
                  onClick={handleSave}
                >Save</button>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
