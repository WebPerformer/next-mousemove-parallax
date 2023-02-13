import React, { useRef } from 'react'
import Link from 'next/link'

// icons
import { FiExternalLink } from "react-icons/fi"

export default function Home() {

  // Refs
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const layer3Ref = useRef(null)
  const layer4Ref = useRef(null)
  const layer5Ref = useRef(null)
  const layer6Ref = useRef(null)
  const layer7Ref = useRef(null)
  const layer8Ref = useRef(null)
  const layer9Ref = useRef(null)
  const layer10Ref = useRef(null)
  const layer11Ref = useRef(null)
  const layer12Ref = useRef(null)

  const parallax = (e) => {
    const layers = [layer1Ref, layer2Ref, layer3Ref, layer4Ref, layer5Ref, layer6Ref, layer7Ref, layer8Ref, layer9Ref, layer10Ref, layer11Ref, layer12Ref]

    layers.forEach(layer => {
      const speed = layer.current.getAttribute("data-speed")

      const x = (window.innerWidth - e.pageX * speed) / 100
      const y = (window.innerHeight - e.pageY * speed) / 100

      layer.current.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
  }

  return (
    <div className="main-content" onMouseMove={(e) => parallax(e)}>
      <div className="title">
        <div className="small-title">Component Project</div>
        <div className="big-title">Mousemove Parallax</div>
      </div>
      <div className="component-container">
        <img src="./images/1.png" alt="" data-speed="-5" ref={layer1Ref}/>
        <img src="./images/2.png" alt="" data-speed="5" ref={layer2Ref}/>
        <img src="./images/3.png" alt="" data-speed="2" ref={layer3Ref}/>
        <img src="./images/4.png" alt="" data-speed="6" ref={layer4Ref}/>
        <img src="./images/5.png" alt="" data-speed="8" ref={layer5Ref}/>
        <img src="./images/6.png" alt="" data-speed="-2" ref={layer6Ref}/>
        <img src="./images/7.png" alt="" data-speed="4" ref={layer7Ref}/>
        <img src="./images/8.png" alt="" data-speed="-9" ref={layer8Ref}/>
        <img src="./images/9.png" alt="" data-speed="6" ref={layer9Ref}/>
        <img src="./images/10.png" alt="" data-speed="-7" ref={layer10Ref}/>
        <img src="./images/11.png" alt="" data-speed="-5" ref={layer11Ref}/>
        <img src="./images/12.png" alt="" data-speed="-2" ref={layer12Ref}/>
        <div className="text">PARALLAX</div>
      </div>
      <Link target="_blank" href="https://www.youtube.com/watch?v=dqzZ0SbSgHY"><div className="credits">Credits: <span>Online Tutorials</span> <FiExternalLink/></div></Link>
    </div>
  )
}