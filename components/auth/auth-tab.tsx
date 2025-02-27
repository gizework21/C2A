"use client";

import { cn } from "@/lib";
import { LoginForm, SignupForm } from ".";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui";
import { useAuthTab } from "@/hooks";

export const AuthTab = ({
  modal,
  className,
}: {
  modal?: boolean;
  className?: string;
}) => {
  const authTab = useAuthTab();

  return (
    <div
      className={cn(
        "flex size-full  justify-center items-center   py-4 mx-2 w-full bg-kbackground-card",
        modal && "shadow-lg",
        className
      )}
    >
      <div
        className={
          modal
            ? "w-full"
            : "w-full px-4 md:px-16 lg:px-20 xl:px-38 space-y-4 flex flex-col gap-4"
        }
      >
        <p className="text-center font-semibold">
          {authTab.activeTab === "login"
            ? "Login to your account"
            : "Signup your account"}
        </p>
        <div className="flex items-center justify-center">
          <Tab />
        </div>
      </div>
    </div>
  );
};

const Tab = () => {
  const authTab = useAuthTab();

  return (
    <Tabs
      defaultValue={"login"}
      value={authTab.activeTab}
      className="w-full max-w-lg"
      onValueChange={() => {
        authTab.setActiveTab(
          authTab.activeTab === "login" ? "register" : "login"
        );
      }}
    >
      <TabsList className="grid  grid-cols-2 bg-transparent border border-kaccent my-6">
        <TabsTrigger
          value="login"
          className="data-[state=active]:bg-kaccent border-kaccent  data-[state=active]:text-white"
        >
          Login
        </TabsTrigger>
        <TabsTrigger
          value="register"
          className="data-[state=active]:bg-kaccent border-kaccent data-[state=active]:text-white "
        >
          Signup
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <SignupForm />
      </TabsContent>
    </Tabs>
  );
};
