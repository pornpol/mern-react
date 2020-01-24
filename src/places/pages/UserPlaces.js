import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const userId = useParams().userId;
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "Empire State Building",
      description: "One of the most famus sky scraper in the world!",
      imageUrl:
        "https://assets.app.engoo.com/images/KiXHEl8g6n4bIH7oXaIA0wH0d73I8NiEdizulkBn0JC.jpeg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7706629,
        lng: -73.9602357
      },
      creator: "u1"
    },
    {
      id: "p2",
      title: "Empire State Building",
      description: "One of the most famus sky scraper in the world!",
      imageUrl:
        "https://assets.app.engoo.com/images/KiXHEl8g6n4bIH7oXaIA0wH0d73I8NiEdizulkBn0JC.jpeg",
      address: "20 W 34th St, New York, NY 10001",
      location: {
        lat: 40.7706629,
        lng: -73.9602357
      },
      creator: "u2"
    }
  ];
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
