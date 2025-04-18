import React, { useState, useEffect } from 'react';

function CountdownTimer() {
  const [time, setTime] = useState({
    days: 4,
    hours: 13,
    minutes: 34,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          seconds = 59;
          minutes--;
        } else if (hours > 0) {
          minutes = 59;
          seconds = 59;
          hours--;
        } else if (days > 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
          days--;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2">
      {[
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hour' },
        { value: time.minutes, label: 'Min' },
        { value: time.seconds, label: 'Sec' },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-gray-700 text-white px-3 py-1 rounded text-center"
        >
          <div className="text-sm font-semibold">
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-[10px]">{item.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function DealsAndOffers() {
  const deals = [
    { id: 1, name: 'Smart watches', image: '/src/assets/Image/tech/8.png', discount: 25 },
    { id: 2, name: 'Laptops', image: '/src/assets/Image/tech/7.png', discount: 15 },
    { id: 3, name: 'GoPro cameras', image: '/src/assets/Image/tech/6.png', discount: 40 },
    { id: 4, name: 'Headphones', image: '/src/assets/Image/tech/5.png', discount: 25 },
    { id: 5, name: 'Canon cameras', image: '/src/assets/Image/tech/3.png', discount: 25 },
  ];

  return (
    <div className="mt-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Countdown Timer */}
        <div className="bg-white rounded-lg p-4 md:w-[220px] h-fit mt-5">
          <h2 className="text-xl font-semibold">Deals and offers</h2>
          <p className="text-gray-500 text-sm mt-1">Hygiene equipments</p>
          <div className="mt-4">
            <CountdownTimer />
          </div>
        </div>

        {/* Deals Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 border border-gray-300">
            {deals.map((product, index) => (
              <div
                key={product.id}
                className={`flex flex-col items-center p-4 bg-white h-full
                ${index !== deals.length - 1 ? 'border-r border-gray-300' : ''}`} 
              >
                <div className="w-full mb-3 flex justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-24 h-24 object-contain"
                  />
                </div>
                <h3 className="text-center text-sm font-medium text-gray-800">
                  {product.name}
                </h3>
                <span className="mt-2 bg-red-100 text-red-500 px-3 py-1 rounded-full text-xs font-bold">
                  -{product.discount}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
