import React, { useEffect, useState } from 'react';
import NavBar from '../Components/Nav';
import Footer from '../Components/Footer';
import useCode from '../Code/Code';
import ViewItem from '../Components/ViewItem';

const SearchPage = () => {
    const [items, setItems] = useState([]);
    const [searchItem, setSearchItem] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const { pcUrl, videoGameUrl, gamingPhoneUrl, viewItem,
            changeImage, currentImg, expandedDesc, showMoreDesc,
            view, setView, handleViewItem } = useCode();

    const match = (item) => {
        return item.Name.toLowerCase().includes(searchItem.toLowerCase());
    };

    const search = (item) => {
        const matchedItems = setItems(items.filter(match));
        setFilteredItems(matchedItems);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const pcResponse = await fetch(pcUrl);
            const pcData = await pcResponse.json();
            const videoGameResponse = await fetch(videoGameUrl);
            const videoGameData = await videoGameResponse.json();
            const gamingPhoneResponse = await fetch(gamingPhoneUrl);
            const gamingPhoneData = await gamingPhoneResponse.json();
            const combinedData = [...pcData, ...videoGameData, ...gamingPhoneData];
            const shuffledData = combinedData.sort(() => 0.5 - Math.random());
            setItems(shuffledData);
            setFilteredItems(shuffledData); // Initialize filtered items
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, [pcUrl, videoGameUrl, gamingPhoneUrl]);

    return (
        <>
            <NavBar setSearchItem={setSearchItem} search={search} />
            <div className="background"></div>
      <div className='container d-flex-wrap justify-content-between align-items-center'>
        {items.map((item, index) => (
          <div key={index} className="card cardshop mb-3" style={{ backgroundColor: "#f8f9fa5a" }}>
            <div className="row g-0">
              <div className="col-md-6">
                <div className="img-container">
                  <img 
                  style={{ width: "100%", height: "200px", objectFit: "contain" }}
                  src={item.main_img}
                  className="btn img-fluid rounded-start p-1"
                  type='button'
                  alt="cardpic"
                  onClick={() => handleViewItem(item)}/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body p-1">
                  <h5 className="card-title btn p-0" style={{ textAlign: 'left', fontWeight: "600" }} onClick={() => handleViewItem(item)}>{item.Name}</h5> <br />
                  <h6>&#8369;{parseFloat(item.price.replace(/,/g, '')).toLocaleString('en-US')}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
            <ViewItem 
                 viewItem={viewItem} 
                 changeImage={changeImage}
                 currentImg={currentImg}
                 expandedDesc={expandedDesc}
                 showMoreDesc={showMoreDesc}
                 view={view}
                 setView={setView}
            />
            <Footer />
        </>
    );
};

export default SearchPage;
