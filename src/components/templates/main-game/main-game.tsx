import { BasicCarCard } from "@/components/molecules/basic-card-component";
import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { useGenerateCards } from "@/utils/hooks/useGenerateCards.hooks";

export const MainGame = () => {
  const { removeCarFromList, cars } = useGenerateCards();

  return (
    <>
      <Header />
      <div>
        <div className="grid grid-cols-5 gap-2">
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
      <Footer />
    </>
  );
};
