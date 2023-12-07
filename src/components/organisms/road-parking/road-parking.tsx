import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { useGenerateCards } from "@/utils/hooks/use-generate-cards.hooks";
import { SelectedCarCard } from "@/components/molecules/selected-cars-card";

export const RoadAndParking = () => {
  const {
    cars,
    addSelectedCarsToSelectedListAndRemoveFromCarList,
    removeCarsFromCarsList,
    removeCarFromSelectedList,
    selectedCars,
  } = useGenerateCards();

  const roadMarkings = () => {
    const markings = [];
    for (let i = 0; i < 4; i++) {
      markings.push(<div className="h-[40px] w-1/6 bg-white/50" key={i}></div>);
    }
    return markings;
  };

  return (
    <>
      <div className="h-[400px] mt-[24px] mb-[24px] bg-black overflow-hidden relative">
        <div className="relative h-full">
          <div className="flex z-0 absolute justify-between w-full h-full items-center">
            {roadMarkings()}
          </div>
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
      <div className="flex">
        <img
          className="w-[150px] h-[160px] mr-[30px] animate-bounce my-auto"
          src="/images/parking-sign.png"
        />
        <div className="flex flex-wrap bg-slate-800 p-[20px] w-full h-[260px] gap-[20px]">
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
      </div>
    </>
  );
};
