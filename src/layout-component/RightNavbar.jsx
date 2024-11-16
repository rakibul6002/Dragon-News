import FindUs from "../components/FindUs";
import SocialLogin from "../components/SocialLogin";

export default function RightNavbar() {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  )
}
