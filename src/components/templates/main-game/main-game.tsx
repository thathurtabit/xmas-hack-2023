import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";
import { Notifications } from "@/components/molecules/notifications/notifications";
import { useIntroModal } from "@/utils/hooks/use-intro-modal.hook";
import { Modal } from "@/components/molecules/modal/modal";
import { SelectedCarCard } from "@/components/molecules/selected-cars-card";

export const MainGame = () => {
  useIntroModal();
  const {
    removeCarFromSelectedList,
    cars,
    addSelectedCarsToSelectedListAndRemoveFromCarList,
    selectedCars,
    removeCarsFromCarsList,
  } = useGenerateCards();

  return (
    <>
      <Header />
      <div className="h-[750px]">
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

      <Notifications />
      <Modal />
      <Footer />
    </>
  );
};
