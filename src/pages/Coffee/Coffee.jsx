import { useLoaderData } from "react-router-dom";

const Coffee = () => {
   const loadedCoffee=useLoaderData();
   return (
      <div>
         {
            loadedCoffee.name
         }
      </div>
   );
};

export default Coffee;