import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";
import { Notifications } from "@/components/molecules/notifications/notifications";
import { useIntroModal } from "@/utils/hooks/use-intro-modal.hook";
import { Modal } from "@/components/molecules/modal/modal";

export const MainGame = () => {
  const { removeCarFromList, cars } = useGenerateCards();
  useIntroModal();

  return (
    <>
      <Header />
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {cars.map((car) => {
            return (
              <BasicCarCard
                {...car}
                removeCarFromList={removeCarFromList}
                key={car.id}
              />
            );
          })}
        </div>
      </div>
      <Notifications />
      <Modal />
      <Footer />
    </>
  );
};
