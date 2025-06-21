import React, { useState } from "react";
import Link from "next/link";

export default function Passenger() {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [rides, setRides] = useState([
    { status: "Pending", route: "To City Center" },
    { status: "Completed", route: "To Airport" },
  ]);
  const [fare, setFare] = useState(null);
  const [language, setLanguage] = useState("en");

  const handleRequestRide = () => {
    if (pickup && dropoff) {
      const newRide = { status: "Pending", route: `From ${pickup} to ${dropoff}` };
      setRides([newRide, ...rides]);
      setFare(Math.floor(Math.random() * 500 + 100));
      setPickup("");
      setDropoff("");
    }
  };

  return (
    <main className="min-h-screen bg-white p-6 max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-green-700">{language === "en" ? "Passenger Dashboard" : "Dashibodi ya Abiria"}</h2>
        <button className="text-sm underline text-green-500" onClick={() => setLanguage(language === "en" ? "sw" : "en")}>
          {language === "en" ? "Swahili" : "English"}
        </button>
      </div>

      <div className="bg-green-50 p-4 rounded-xl shadow mb-6">
        <p className="text-green-800 font-medium mb-2">{language === "en" ? "Request a Ride" : "Omba Safari"}</p>
        <input type="text" placeholder={language === "en" ? "Pickup location" : "Mahali pa kuchukuliwa"} value={pickup} onChange={(e) => setPickup(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder={language === "en" ? "Drop-off location" : "Mahali pa kushuka"} value={dropoff} onChange={(e) => setDropoff(e.target.value)} className="w-full mb-2 p-2 border rounded" />
        <button onClick={handleRequestRide} className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          {language === "en" ? "Request Ride" : "Omba Safari"}
        </button>
        {fare && (
          <div className="mt-3 text-green-800">
            {language === "en" ? "Estimated Fare" : "Nauli inayokadiriwa"}: KES {fare}
            <div className="mt-2">
              <button className="bg-yellow-500 text-white px-3 py-1 mr-2 rounded">M-PESA</button>
              <button className="bg-gray-400 text-white px-3 py-1 rounded">Cash</button>
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-100 p-4 rounded-xl shadow mb-6">
        <p className="text-gray-800 mb-2 font-semibold">{language === "en" ? "Your Rides" : "Safari zako"}</p>
        <ul className="text-sm text-gray-600">
          {rides.map((ride, index) => (
            <li key={index}>
              {ride.status === "Pending" ? "🟢" : "✅"} {ride.status} - {ride.route}
            </li>
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