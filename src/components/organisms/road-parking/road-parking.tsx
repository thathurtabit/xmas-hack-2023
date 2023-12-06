import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";
import { SelectedCarCard } from "@/components/molecules/selected-cars-card";

export const RoadAndParking = () => {
  const {
    cars,
    addSelectedCarsToSelectedListAndRemoveFromCarList,
    removeCarsFromCarsList,
    removeCarFromSelectedList,
    selectedCars,
  } = useGenerateCards();

  return (
    <>
      <div className="h-[360px] mt-[24px] mb-[24px] bg-black overflow-hidden relative">
        <div className="relative">
        {cars.map((car) => {
          return (
            <BasicCarCard
              {...car}
              addSelectedCarsToSelectedListAndRemoveFromCarList={
                addSelectedCarsToSelectedListAndRemoveFromCarList
              }
              removeCarsFromCarsList={removeCarsFromCarsList}
              key={car.id}
            />
          );
        })}
        </div>
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
    </>
  );
};
