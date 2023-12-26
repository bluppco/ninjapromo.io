// IMPORT LAYOUTS
import ContainerJSX from "../../layouts/Container"

// IMPORT FRAMER MOTION LIBRARY
import { motion, useScroll, useAnimation, useMotionValueEvent } from "framer-motion"

// IMPORT USESTATE AND USEFFECT
import { useState, useEffect } from "react"

const Header = () => {

	const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 100 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

    }, [])

	const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })

	return(
		<header className="hidden md:block">
			<motion.header className={` ${ isScrolled ? "bg-black" : "bg-transparent" } w-full fixed z-50`}
                variants={ squareVariants }
                initial="display"
                animate={ controls }
            >
				<ContainerJSX>
					<nav className="p-4 flex items-center justify-between">
						<a href="/" className="flex items-center">
							<img
								src="logo/logo.svg"
								alt="Ninja Promo"
								className="h-8 mr-4"
							/>
						</a>
						<ul className="hidden md:flex items-center gap-14">
							<li className="font-dm_sans font-medium text-white hover:text-gray-300">
								<a>Services</a>
							</li>
							<li className="font-dm_sans font-medium text-white hover:text-gray-300">
								<a>Industries</a>
							</li>
							<li className="font-dm_sans font-medium text-white hover:text-gray-300">
								<a>Work</a>
							</li>
							<li className="font-dm_sans font-medium text-white hover:text-gray-300">
								<a>Company</a>
							</li>
							<li className="font-dm_sans font-medium text-white hover:text-gray-300">
								<a>Contact</a>
							</li>
						</ul>
						<button className={` ${ isScrolled ? "bg-ninjapromo_blue border-ninjapromo_blue" : "bg-transparent border-white" } border-2 text-white font-bold py-2 px-8`}>Book Intro Call</button>
					</nav>
				</ContainerJSX>
			</motion.header>
		</header>

	)

}

export default Header
