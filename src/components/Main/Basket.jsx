import React from 'react';

function Basket({ items, setItems }) {
  const handleIncrease = (item) => {
    const updatedItems = items.map((i) =>
      i.id === item.id ? { ...i, quantity: (i.quantity || 0) + 1 } : i
    );
    setItems(updatedItems);
  };

  const handleDecrease = (item) => {
    const updatedItems = items.map((i) => {
      if (i.id === item.id) {
        const newQuantity = (i.quantity || 1) - 1;
        if (newQuantity <= 0) {
          return null;
        }
        return { ...i, quantity: newQuantity };
      }
      return i;
    }).filter(Boolean);
    setItems(updatedItems);
  };

  const handleClearBasket = () => {
    setItems([]);
  };

  return (
    <main className='min-h-[100vh] pt-[150px]'>
      <h2 className='text-center text-[30px] m-4'>CART</h2>
      <div className='flex flex-col items-center'>
        <div className='flex justify-between xl:min-w-[1200px] lg:min-w-[1000px] md:min-w-[850px] smm:min-w-[500px] smm:text-[15px] md:text-[17px] border-b p-2 text-[20px] mt-3'>
          <p>PRODUCT</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className='flex justify-between xl:min-w-[1200px] lg:min-w-[1000px] md:min-w-[850px] smm:min-w-[500px] smm:text-[12px] md:text-[17px] pt-10 pb-5'>
              <div className='flex gap-4'>
                <div>
                  <img className='md:w-[130px] smm:w-[70px] h-auto' src={item.image} alt="" />
                </div>
                <div className='pt-[25px]'>
                  <span className='pt-[85px]'>{item.name}</span>  <br />
                  <span className='pt-[85px]'>${(item.price * (item.quantity || 1)).toFixed(2)}</span> <br />
                  <span><b> (Size: {item.size} | x{item.quantity || 1})</b></span>
                </div>
              </div>
              <div className='flex gap-5 mr-[300px]'>
                <button onClick={() => handleDecrease(item)} className='bg-[#aaa] mt-[45px] text-[white] w-[30px] h-[30px]'>-</button>
                <button onClick={() => handleIncrease(item)} className='bg-[#aaa] mt-[45px] text-[white] w-[30px] h-[30px]'>+</button>
              </div>
              <div>
                <span className='pt-[85px]'>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </div>
            </div>
          ))
        ) : (
          <p>Your basket is empty.</p>
        )}
      </div>

      <div className='p-8 text-right container'>
        <button onClick={handleClearBasket} className='bg-[#000] text-[#fff] w-[140px] h-[50px] rounded-md'>Təmizlə</button>
      </div>
    </main>
  );
}

export default Basket;
