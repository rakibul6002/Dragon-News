import { FcGoogle } from "react-icons/fc";
import { ImGithub } from "react-icons/im";
export default function SocialLogin() {
  return (
    <div className="">
        <h2 className="font-semibold mb-3">Login with</h2>
        <div className="*:w-full space-y-3">
            <button className="btn"><FcGoogle/> Login with Google</button>
            <button className="btn"><ImGithub/>Login with Github</button>
        </div>
    </div>
  )
}
