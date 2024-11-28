import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full h-1/4 pt-8 relative mt-20">
      {/* rows 1 */}
      <div className="flex flex-wrap justify-center items-center pt-4">
        <div className="absolute top-0 w-2/3">
          <div className="flex gap-4 my-2">
            <Link
              href="https://www.instagram.com/pasteprosmana/"
              target="_blank"
            >
              <FaInstagram size={30} />
            </Link>
            <Link href="https://github.com/mamsky" target="_blank">
              <FaGithub size={30} />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-6 text-slate-400">
            <div>
              <ul>
                <li>Deskripsi Audio</li>
                <li>Investor</li>
                <li>Pemberitahuan Hukum</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Pusat Bantuan</li>
                <li>Pekerjaan</li>
                <li>Preferensi Cookies</li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Ketentuan Penggunaan</li>
                <li>Informasi Perusahaan</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>
            <div>Papoy Film</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
