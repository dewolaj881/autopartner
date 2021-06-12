import React, { useState, useEffect } from 'react';

export default function Footer() {

  const [date, setDate] = useState();

  const getYear = () => setDate(new Date().getFullYear())

  useEffect(() => {
    getYear();
  }, [])
  return (
    <div className="bg-gray-900 border-t-2 text-sm border-red-600 py-4 text-center text-white">
      &copy; Autopartner - {date}
      <div>Designed by NaujaScript</div>
    </div>
  );
}