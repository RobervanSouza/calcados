import React from "react";
import Desconto from "./desconto";
 // Adjust the import path according to your project structure

const ExampleComponent = () => {
  // You can change the discount value here
  const discountValue = 50;

  return (
    <div>
      {/* Use the Desconto component and pass the discount prop */}
      <Desconto discount={discountValue} />
    </div>
  );
};

export default ExampleComponent;
