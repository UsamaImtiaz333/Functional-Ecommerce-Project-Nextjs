import AuthWrapper from "@/components/common/Auth/AuthWrapper";
import { Input } from "@/components/ui/input";

function ForgetPasswordPage() {
  return (
    <AuthWrapper title="Enter Valid Email" subtitle="Forget Password">
      <Input
        placeholder="example@gmail.com"
        className=" pl-4 py-2 bg-gray-100 border border-gray-300 placeholder-gray-300 placeholder:font-medium"
      />
    </AuthWrapper>
  );
}
export default ForgetPasswordPage;
