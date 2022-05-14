import React from "react"
import { SiGmail } from "react-icons/si"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center pt-5 pb-5 mt-3 border-t-[1px] border-slate-300 bg-slate-100">
      <div className="flex justify-center ">
        <a href="https://github.com/JamesIde" target="#" className="">
          <FaGithub
            size="1.2rem"
            className="text-[#222] hover:text-gray-500 duration-500 cursor-pointer mr-1 ml-1"
          />
        </a>
        <a href="https://www.linkedin.com/in/james-ide-a92368180/" target="#">
          <FaLinkedinIn
            size="1.2rem"
            className="text-[#222] hover:text-gray-500 duration-500 cursor-pointer mr-1 ml-1"
          />
        </a>
        <a href="mailto:james.ide775@gmail.com" target="#">
          <SiGmail
            size="1.2rem"
            className="text-[#222] hover:text-gray-500 duration-500 cursor-pointer mr-1 ml-1"
          />
        </a>
      </div>
      <div className="flex justify-center mt-2">
        <p className="">James Ide &copy; {footerYear}</p>
      </div>
    </footer>
  )
}

export default Footer
