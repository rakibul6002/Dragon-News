import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FindUs() {
  return (
    <div>
        <h2 className="font-semibold mb-3">Find Us On</h2>
        <div className="join join-vertical flex *:bg-base-100">
            <button className="btn join-item justify-start"><FaFacebook/> Facebook</button>
            <button className="btn join-item justify-start"><FaInstagram/> Instragram</button>
            <button className="btn join-item justify-start"><FaTwitter/> Twitter</button>
         
        </div>
    </div>
  )
}
