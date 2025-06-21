import React, { useState } from "react";
import Link from "next/link";

export default function Driver() {
  const [requests, setRequests] = useState([
    { id: 1, pickup: "Westlands", dropoff: "CBD" },
    { id: 2, pickup: "Kilimani", dropoff: "Industrial Area" },
  ]);
  const [accepted, setAccepted] = useState([]);
  const [language, setLanguage] = useState("en");

  const handleAccept = (rideId) => {
    const ride = requests.find((r) => r.id === rideId);
    if (ride) {
      setAccepted([ride, ...accepted]);
      setRequests(requests.filter((r) => r.id !== rideId));
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">{language === "en" ? "Driver Dashboard" : "Dashibodi ya Dereva"}</h2>
        <button className="text-sm underline text-green-500" onClick={() => setLanguage(language === "en" ? "sw" : "en")}>
          {language === "en" ? "Swahili" : "English"}
        </button>
      </div>

      <div className="bg-green-50 p-4 rounded-xl shadow mb-6">
        <p className="text-green-800 font-medium mb-2">{language === "en" ? "Incoming Ride Requests" : "Maombi ya Safari"}</p>
        <ul className="text-sm text-gray-700">
          {requests.map((r) => (
            <li key={r.id} className="mb-2">
              📍 {language === "en" ? "Pickup" : "Chukua"}: {r.pickup} → {language === "en" ? "Destination" : "Mwelekeo"}: {r.dropoff}
              <button onClick={() => handleAccept(r.id)} className="ml-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700">
                {language === "en" ? "Accept" : "Kubali"}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl shadow mb-6">
        <p className="text-gray-800 mb-2 font-semibold">{language === "en" ? "Accepted Rides" : "Safari Zilizokubaliwa"}</p>
        <ul className="text-sm text-gray-600">
          {accepted.map((r, idx) => (
            <li key={idx}>🚗 {language === "en" ? "Ongoing" : "Inaendelea"} - From {r.pickup} to {r.dropoff}</li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-100 p-4 rounded-xl text-center text-sm text-blue-700">
        <p>🗺️ Map Preview:</p>
        <img src="https://maps.gstatic.com/tactile/pane/default_geocode-2x.png" alt="map" className="rounded mt-2" />
      </div>

      <Link href="/">
        <p className="text-green-600 mt-6 underline text-center">{language === "en" ? "← Back to Home" : "Rudi Nyumbani"}</p>
      </Link>
    </main>
  );
}