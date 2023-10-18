import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [displayCoffees, setDisplayCoffees] = useState(loadedCoffees);
  const handleDelete = (id) => {
   // sweet-alert-warning
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingCoffees = displayCoffees.filter(
                (coffee) => coffee._id !== id
              );
              setDisplayCoffees(remainingCoffees);
            // sweet-alert-final
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <div>
      {displayCoffees.map((coffee) => (
        <div
          className="border-2 flex gap-5 border-theme-red p-4 m-5"
          key={coffee._id}
        >
          <p>{coffee.name}</p>
          <div>
            <Link className="btn" to={`/coffee/${coffee._id}`}>
              View
            </Link>
            <button
              onClick={() => handleDelete(coffee._id)}
              className="btn bg-theme-red ml-3"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
