import { Header } from "@/components/molecules/header/header";
import { Footer } from "@/components/molecules/footer/footer";
import { Notifications } from "@/components/molecules/notifications/notifications";
import { useIntroModal } from "@/utils/hooks/use-intro-modal.hook";
import { Modal } from "@/components/molecules/modal/modal";
import { RoadAndParking } from "@/components/organisms/road-parking/road-parking";

export const MainGame = () => {
  useIntroModal();

  return (
    <>
        <Header />
        <div className="bg-emerald-900 p-[32px] pt-0">
        <RoadAndParking />
        <Notifications />
        <Modal />
        <Footer />
        </div>
    </>
  );
};
