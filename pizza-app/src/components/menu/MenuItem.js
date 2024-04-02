export default function MenuItem() {
    return (
        <div className="border p-4 rounded-lg text-center z-10">
            <img src="/pizza.png" alt="pizza" />
            <h4 className="font-semibold text-xl my-3">
                Pepperoni Pizza
            </h4>
            <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button className="bg-primary text-white rounded-full px-8 py-2 mt-4 cursor-pointer">Add to cart $12</button>
        </div>
    )
}
