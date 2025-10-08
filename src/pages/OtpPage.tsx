import AuthWrapper from "@/components/common/Auth/AuthWrapper";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function OtpPage() {
  return (
    <AuthWrapper title="Verify Your Account" subtitle="Enter the 6-digit code sent to your email or phone number to continue.">
      <div className="flex flex-col justify-center items-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </AuthWrapper>
  );
}

export default OtpPage;
