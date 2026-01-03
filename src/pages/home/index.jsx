import { useSelector } from "react-redux";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurant
  );
  return (
    <div className="container">
      <h1 className="font-semibold text-xl md:text-2xl mb-5">
        Yakınınızdaki Restoranlar
      </h1>
    </div>
  );
};

export default Home;
