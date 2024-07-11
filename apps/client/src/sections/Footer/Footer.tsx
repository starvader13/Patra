import {useNavigate} from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGitlab } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineRestorePage } from "react-icons/md";
import { FaCopyright } from "react-icons/fa";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer>
            <div className="h-0.5 bg-slate-400 mx-6 rounded-xl shadow-xl shadow-cyan-400"></div>
            <section className={"flex justify-evenly border-none rounded-lg md:mx-9 md:py-8 font-mono tracking-tight"}>
                <div className={"flex flex-col justify-start"}>
                    <div className={"text-md lg:text-xl pb-4"}>Author <span className={"max-md:hidden"}>Details</span></div>
                    <ul className={"text-sm lg:text-md font-medium"}>
                        <a href="https://ashutoshgupta.dev" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Blog</div>
                            <CgWebsite />
                        </li></a>
                        <a href="https://github.com/starvader13" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Github</div>
                            <FaGithub />
                        </li></a>
                        <a href="https://www.linkedin.com/in/ashutoshgupta13/" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Linkedin</div>
                            <FaLinkedin />
                        </li></a>
                        <a href="https://x.com/ashutosh01113" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Twitter</div>
                            <FaSquareXTwitter />
                        </li></a>
                        <a href="https://gitlab.com/starvader13" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Gitlab</div>
                            <FaSquareGitlab />
                        </li></a>
                    </ul>
                </div>
                <div className={"flex flex-col justify-start bottom-0 "}>
                    <div className={"text-md lg:text-xl pb-4"}>Project <span className={"max-md:hidden"}>Details</span></div>
                    <ul className={"text-sm lg:text-md font-medium"}>
                        <li className={"footer-text"} onClick={()=>navigate("/")}>
                            <div>Home</div>
                            <MdOutlineRestorePage />
                        </li>
                        {/*<li className={"footer-text"} onClick={()=>navigate("/price")}>Price</li>*/}
                        <a href="https://github.com/starvader13/Patra" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Contribute</div>
                            <FaGithubSquare />
                        </li></a>
                        <a href="https://github.com/starvader13/Patra/tree/main/packages/docs" target={"_blank"} rel={"noreferrer noopener"}><li className={"footer-text"}>
                            <div>Docs</div>
                            <IoDocumentText />
                        </li></a>
                    </ul>
                </div>
                <div className={"flex flex-col items-center justify-center text-md md:text-lg"}>
                    <div className={"flex justify-center items-center gap-1"}>
                        <FaCopyright />
                        <div>Copyright 2024</div>
                    </div>
                    <div className={"pl-6"}>Ashutosh Gupta</div>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
