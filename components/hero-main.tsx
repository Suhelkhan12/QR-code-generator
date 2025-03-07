import HeroTabs from "./hero-tabs";
import QrCode from "./qr-code";
import { Card, CardContent } from "./ui/card";

const HeroMain = () => {
  return (
    <Card className="rounded-sm">
      <CardContent className="px-6 flex lg:flex-row flex-col gap-10 ">
        <HeroTabs />
        <QrCode />
      </CardContent>
    </Card>
  );
};

export default HeroMain;
