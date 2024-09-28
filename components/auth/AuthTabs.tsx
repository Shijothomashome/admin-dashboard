import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "@/components/auth/SignInForm";
import SignUpForm from "@/components/auth/SignUpForm";

const AuthTabs = () => {
  return (
    <Tabs defaultValue="signIn" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signIn">Sign In</TabsTrigger>
        <TabsTrigger value="signUp">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm />
      </TabsContent>
      <TabsContent value="signUp">
        <SignUpForm />
      </TabsContent>
    </Tabs>
  );
};

export default AuthTabs;
