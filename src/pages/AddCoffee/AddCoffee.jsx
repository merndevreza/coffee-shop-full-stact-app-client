import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form);
    const name = form.name.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const price = form.price.value;
    const category = form.category.value;
    const photo = form.photo.value;
    const coffeeForm = { name, chef, taste, price, category, photo };
    console.log(coffeeForm);
    fetch("https://full-stact-project-1-server-83z1rk3b3-rezaul-karims-projects.vercel.app/coffees",{
      method:"POST",
      headers:{
         "content-type":"application/json"
      },
      body:JSON.stringify(coffeeForm)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if (data.insertedId) {
         Swal.fire({
            icon: 'success',
            title: 'Congratulation',
            text: 'You added a coffee successfully!'
            
          })
      }
    })
  };
  return (
    <div>
      <div className="max-w-6xl mx-auto p-20 m-10 bg-[#F4F3F0] ">
        <h2 className="text-center text-4xl font-semibold [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
          Add New Coffee
        </h2>
        <p className="text-center">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleAddCoffee}>
          <div className="flex gap-6 mb-4">
            <div className="w-full">
              <label htmlFor="name">Name</label>
              <input
                className="w-full p-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="w-full">
              <label htmlFor="chef">Chef</label>
              <input
                className="w-full p-2"
                type="text"
                name="chef"
                id="chef"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="w-full">
              <label htmlFor="taste">Taste</label>
              <input
                className="w-full p-2"
                type="text"
                name="taste"
                id="taste"
                placeholder="Enter coffee taste"
              />
            </div>
            <div className="w-full">
              <label htmlFor="price">Price</label>
              <input
                className="w-full p-2"
                type="text"
                name="price"
                id="price"
                placeholder="Enter coffee Price"
              />
            </div>
          </div>
          <div className="flex gap-6 mb-4">
            <div className="w-full">
              <label htmlFor="category">Category</label>
              <input
                className="w-full p-2"
                type="text"
                name="category"
                id="category"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="w-full">
              <label htmlFor="photo">Photo</label>
              <input
                className="w-full p-2"
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter photo-url"
              />
            </div>
          </div>
          <div className="mt-10">
            <input
              className="btn w-full bg-theme-golden hover:bg-theme-red"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
