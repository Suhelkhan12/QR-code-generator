"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Link, Mail } from "lucide-react";

const HeroTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("url");

  return (
    <Tabs
      defaultValue="url"
      onValueChange={setActiveTab}
      className="w-1/2 rounded-sm "
    >
      <TabsList className="grid w-full grid-cols-2 mb-2 rounded-sm h-12 border">
        <TabsTrigger
          value="url"
          onClick={() => setActiveTab("url")}
          className="cursor-pointer rounded-sm py-2"
        >
          <Link className="h-5 w-5" />
          Url
        </TabsTrigger>

        <TabsTrigger
          value="email"
          onClick={() => setActiveTab("email")}
          className="cursor-pointer rounded-sm py-2"
        >
          <Mail className="h-5 w-5" />
          Email
        </TabsTrigger>
      </TabsList>

      <TabsContent value="url">url</TabsContent>
      <TabsContent value="email">email</TabsContent>
    </Tabs>
  );
};

export default HeroTabs;
