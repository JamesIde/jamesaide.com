import React from "react"
import { SiGmail } from "react-icons/si"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer footer-center pt-5 pb-5 mt-3 border-t-[1px] border-slate-300 bg-slate-100">
      <div className="flex mx-auto justify-center">
        <p className="lg:mr-[680px] md:mr-[450px] mr-[200px]">
          James Ide &copy; {footerYear}
        </p>
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
    </footer>
  )
}

export default Footer
