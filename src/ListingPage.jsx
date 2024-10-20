import React from 'react';
import { useParams } from 'react-router-dom';
import './ListingPage.css';

function ListingPage() {
  const { id } = useParams();

  // Array of listing data
  const listings = [
    {
      id: '1',
      title: 'Beautiful 3-Bedroom House',
      description: 'A spacious and modern house perfect for families.',
      price: 150, // Price in USD
      bedrooms: 3,
      bathrooms: 2,
      area: 1800, // sqft
      address: 'Nallapadu, Guntur',
      images: ['/h1.jpg'],
    },
    {
      id: '2',
      title: 'Luxury Villa',
      description: 'A luxury villa with a private pool and garden.',
      price: 300,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      address: 'Kakinada, Andhra Pradesh',
      images: ['/house2.jpg'],
    },
    {
      id: '3',
      title: 'Cozy Apartment',
      description: 'A cozy apartment in the heart of the city.',
      price: 200,
      bedrooms: 2,
      bathrooms: 1,
      area: 120,
      address: 'Vijayawada, Andhra Pradesh',
      images: ['/houseimage.jpg'],
    },
  ];

  // Convert price to Indian Rupees (1 USD = 83 INR)
  const convertPriceToINR = (price) => price * 83;

  return (
    <div className="listing-page">
      <h1>Property Listings</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing.id} className="listing-card">
            <h2>{listing.title}</h2>
            <div className="listing-details">
              <div className="listing-images">
                {listing.images.map((image, index) => (
                  <img key={index} src={image} alt={`Property ${index + 1}`} />
                ))}
              </div>
              <div className="listing-info">
                <p className="price">₹{convertPriceToINR(listing.price).toLocaleString()}/month</p>
                <p>{listing.bedrooms} bedrooms • {listing.bathrooms} bathrooms • {listing.area} sqft</p>
                <p>{listing.address}</p>
                <p>{listing.description}</p>
                <button className="book-button">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
