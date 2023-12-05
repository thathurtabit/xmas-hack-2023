import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";
import { SelectedCarCard } from "@/components/molecules/selected-cars-card";

export const MainGame = () => {
  const {
    removeCarFromSelectedList,
    cars,
    addSelectedCarsToList,
    selectedCars,
  } = useGenerateCards();

  return (
    <>
      <Header />
      {/* <div className="flex flex-col"> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
        {cars.map((car) => {
          return (
            <BasicCarCard
              {...car}
              removeCarFromSelectedList={removeCarFromSelectedList}
              addSelectedCarsToList={addSelectedCarsToList}
              key={car.id}
            />
          );
        })}
      </div>
      <div>
        {selectedCars.map((car) => {
          return (
            <SelectedCarCard
              {...car}
              removeCarFromSelectedList={removeCarFromSelectedList}
              key={car.id}
            />
          );
        })}
      </div>
      {/* </div> */}
      <Footer />
    </>
  );
};
