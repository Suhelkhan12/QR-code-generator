import HeroTabs from "./hero-tabs";
import QrCodeWrapper from "./qr-code-wrapper";
import { Card, CardContent } from "./ui/card";

const HeroMain = () => {
  return (
    <Card className="rounded-sm">
      <CardContent className="px-4 md:px-6 flex lg:flex-row flex-col gap-10 ">
        <HeroTabs />
        <QrCodeWrapper />
      </CardContent>
    </Card>
  );
};

export default HeroMain;
