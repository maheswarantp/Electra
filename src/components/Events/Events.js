import React, { useState, useEffect } from "react";
import { FaWrench, FaTrophy, FaTasks, FaTableTennis } from "react-icons/fa";
import "./Events.css";
import Drone from "../../assets/drone.jpg";
import PLC from "../../assets/circuit.jpg";
import CAD from "../../assets/cad.jpg";
import EV from "../../assets/ev.jpg";
import Quiz from "../../assets/quiz.jpg";
import Debug from "../../assets/debug.webp";
import ScrapYard from "../../assets/scrapyard.jpg";
import Treasure from "../../assets/treasure.jpg";

const Content = ({isMoney, link}) => {
  return (
    <div className="w-full">
    {isMoney == true ? (
      <div className="w-full">
        <a href={link}>
          <button
            type="button"
            className="rounded w-full text-base h-12 font-medium duration-200 text-white bg-pink-500 hover:bg-pink-700 mt-auto"
          >
            Register Now
          </button>
        </a>
      </div>
    ) : (
      <></>
    )}
    </div>
  )
}



const registerButton = ({
  class_new = "",
  complete=false,
  img_src,
  date,
  title,
  content,
  cash_price,
  link,
  isMoney = true,
  FeesOrPrize = "Fees",
  team,
  regFees,
}) => {
  return (
    // <div
    //   // style={{height:"500px"}}
    //   className="shadow-lg bg-black rounded-2xl bg-white w-48 md:w-1/3 mt-10 md:mr-5 md:ml-5 p-4 h-fit flex-col md:flex-row"
    // >
    //   <img
    //     src={Drone}
    //     alt="adidas"
    //     className="m-auto"
    //   />
    //   <div className="bg-pink-200 m-3 p-4 rounded-lg">
    //     <p className="text-white text-center text-xl font-bold ">{title}</p>
    //     <p className="text-gray-50 text-xs hidden md:flex">{content}</p>
    //     <div className="flex items-center flex-col flex-1">
    //   {isMoney == true ? <p className="text-blue-500 mt-5 mb-5">₹{cash_price}/-</p> : <></>}
    //   {isMoney == true ?
    //   <button
    //   type="button"
    //   className="rounded w-full text-base h-12 font-medium duration-200 text-white bg-pink-500 hover:bg-pink-700 mt-auto"
    // >
    //   <a href={link}>
    //     Register
    //   </a>
    // </button>
    // :
    // <></>
    //   }

    //     </div>
    //   </div>
    // </div>
    <div class={`p-4 sm:w-1/2 lg:w-1/3` + class_new}>
      <div class="h-full hover:bg-indigo-700 hover:text-white transition duration-300 ease-in border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          class="lg:h-72 md:h-48 w-full object-cover"
          src={img_src}
          alt="blog"
        />
        <div class="p-6">
          <h1 class="text-2xl font-semibold mb-3">{title}</h1>
          <p class="leading-relaxed mb-3">{content}</p>
          <div>
            <h6 className="text-xl text-center mb-5">DATE: {date} </h6>
          </div>
          {team != null ? <h3 className="text-lg mb-5 text-center text-bold">** Register as team of two</h3>:<></>}
          <div class="flex items-center flex-wrap flex-col">
            {isMoney == true ? (
              <p className="text-blue-500 text-3xl mb-5 "> {FeesOrPrize} : ₹ {cash_price} /-</p>
            ) : (
              <></>
            )}
            {regFees != null ? <p className="text-lg mb-5">Registeration Fees: ₹ {regFees} /-</p> : <></>}
            {complete == true ? <h3 className="text-red-600">Registration is Closed, Thank you for your participation.</h3>:<Content link={link} isMoney={isMoney}/>}
            {/* {isMoney == true ? (
              <div className="w-full">
                <a href={link}>
                  <button
                    type="button"
                    className="rounded w-full text-base h-12 font-medium duration-200 text-white bg-pink-500 hover:bg-pink-700 mt-auto"
                  >
                    Register Now
                  </button>
                </a>
              </div>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-col md:flex-row"
          role="tablist"
        >
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 1 ? " border-4 border-black" : " bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
            >
              <FaWrench className="text-2xl" />
              <a
                className="mt-10 hidden md:flex"
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Workshops
              </a>
            </div>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 2 ? " border-4 border-black" : " bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
            >
              <FaTrophy className="text-2xl" />
              <a
                className="mt-10 hidden md:flex"
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Competitions
              </a>
            </div>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 3 ? " border-4 border-black" : " bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
            >
              <FaTasks className="text-2xl" />
              <a
                className="mt-10 hidden md:flex"
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Expo
              </a>
            </div>
          </li>
          <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
            <div
              style={{ width: "200px" }}
              className={
                "text-xs flex rounded justify-center flex-col items-center font-bold uppercase px-5 py-3 block leading-normal" +
                (openTab === 4 ? " border-4 border-black" : " bg-white")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
            >
              <FaTableTennis className="text-2xl" />
              <a
                className="mt-10 hidden md:flex"
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Games
              </a>
            </div>
          </li>
        </ul>
        <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Workshops
                </h1>
                <div className="text-center w-full hidden md:flex">
                  {/* Workshop text */}
                  Technology can circumvent traditional processes and empower
                  individuals through networks, information and digital trade.
                  Technology emboldens the notion of human rights, quite
                  literally, with the touch of a hand Department of Electrical
                  and Electronics Engineering in association with COSPHI
                  presents you two phenomenal workshops to build your technical
                  skills and passion in engineering.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    complete:true,
                    img_src: Drone,
                    date:"14th May 2022",
                    title: "AVIAN",
                    content:
                      "This workshop will take you to the fundamentals of a drone. Participants will get a clear idea on how to build a drone, its theory and the physics behind it. The workshop will be handled by one of the most famous Drone enthusiasts Mr. Abraham George, founder of Drone Racers Kerala. Flying of drones will be exhibited after the workshop by Drone Racers Kerala .",
                    cash_price: 150,
                    link: "https://www.yepdesk.com/open-register/6298f32c46e0fb0001742e8e/oerdce0c8q",
                  })}
                  {registerButton({
                    img_src: PLC,
                    complete:true,
                    date:"14th May 2022",
                    title: "AZTECX",
                    content:
                      "This Workshop on programmable logic controllers (PLC) is an intra college event conducted by the Electra community under COSPHI. We hope to instil a basic understanding of PLC in young engineering students, which will aid them in pursuing their passions and building their future.",
                    cash_price: 100,
                    link: "https://www.yepdesk.com/open-register/6298f32c46e0fb0001742e8e/oerdce0c8q",
                  })}
                </div>
              </div>
              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Competitions
                </h1>
                <div className="text-center w-full hidden md:flex justify-center">
                  Creativity is the act of turning new and imaginative ideas
                  into reality. Here is an opportunity to stretch your
                  imagination.
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    img_src: Quiz,
                    complete:true,
                    date:"13th May 2022",
                    regFees: 20,
                    title: "CERVELLO",
                    content:
                      "Quizzing is an art and a test for the intellect to improve or expand one's knowledge.CERVELLO is a quiz contest organised by ELECTRA in association with COSPHI. The quiz will be based on basic electrical and electronics,science, general knowledge and current affairs.",
                    cash_price: 3000,
                    FeesOrPrize:"Prize",
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                    team: "Register"
                  })}
                  {registerButton({
                    img_src: ScrapYard,
                    complete:true,
                    date:"14th May 2022",
                    title: "SCRAPYARD",
                    regFees: 20,
                    FeesOrPrize:"Prize",
                    content:
                      "ELECTRA in association with COSPHI presents you Scrapyard, a competition which helps students to think on ways of reusing everyday materials. Participants will be provided a theme for which they have to model best creative and attractive products out of the waste materials.The competition's purpose is to raise environmental awareness and foster",
                    cash_price: 2500,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                  })}
                  {registerButton({
                    img_src: CAD,
                    complete:true,
                    date:"13th May 2022",
                    FeesOrPrize:"Prize",
                    regFees: 20,
                    title: "SKETCHITUP",
                    content:
                      "To challenge your skills, ELECTRA in association with COSPHI brings before you SKETCH IT UP,  Cad  Competition, a platform for students to showcase their designs and their creative skills.",
                    cash_price: 2000,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                  })}
                  {registerButton({
                    img_src: Debug,
                    complete:true,
                    date:"14th May 2022",
                    FeesOrPrize:"Prize",
                    regFees: 20,
                    title: "CIRCUITGENIX",
                    content:
                      "To enhance the student's knowledge of basic circuits and showcase their brainstorming ideas in-circuit solving, COSPHI in association with ELECTRA presents CIRCUITGENIX- a circuit debugging competition to test the ability of participants to find errors in circuits and correct them so that the required function is achieved.",
                    cash_price: 3500,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                    team:"Register as a team of two"
                  })}
                </div>
              </div>
              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                    Expo
                  </h1>
                  <div className="text-center w-full hidden md:flex justify-center">
                    Electric vehicles (EVs) have the potential to eliminate the
                    use of fossil fuels in the transportation industry.
                    Electrification of the transportation industry can also
                    result in better energy efficiency and lower pollution
                    levels in the local area. However, there are legitimate
                    concerns about meeting future energy demand for charging
                    electric vehicle batteries with clean and renewable sources.
                    <br />
                    {/* Here is a visual treat on electric vehicles put on by the
                    electra community under the auspices of COSPHI. We feature
                    industry leaders such as Revolt, Aban Motors, Gokulam
                    Motors, Tata, Hyundai, Odysse, and MG COASTLINE GARAGES. */}
                  </div>
                  {registerButton({
                    img_src: EV,
                    date:"14th May 2022",
                    class_new:"text-center",
                    title: "Expo",
                    isMoney: false,
                  })}
                </div>
              </div>
              <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <h1 className="flex md:hidden text-bold text-3xl w-full justify-center mb-10">
                  Games
                </h1>
                <div className="text-center w-full hidden md:flex justify-center">
                  GET READY FOR FUN CHALLENGES AND UNIQUE ADVENTURE
                </div>
                <div className="flex justify-evenly flex-wrap flex-col md:flex-row">
                  {registerButton({
                    class_new: "",
                    FeesOrPrize:"Prize",
                    img_src: Treasure,
                    date:"14th May 2022",
                    title: "Treasure Hunt",
                    content:
                      "Discover the mysterious secrets hidden deep within the vast unknown",
                    cash_price: 3000,
                    link: "https://www.yepdesk.com/open-register/6298d8fb46e0fb0001736ab5/l4k5i3oera",
                    isMoney:false
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Events() {
  return (
    <div className="flex justify-center mt-20 mb-20" id="Events-Page">
      <div className="w-3/4 bg-white pt-3 rounded-lg">
        <div className="flex justify-center mb-10">
          <h1 className="font-medium text-black text-5xl">Events</h1>
        </div>
        <div className="m-10">
          <Tabs color="red" />;
        </div>
      </div>
    </div>
  );
}

export default Events;

// "ELECTRA in association with COSPHI presents you Scrapyard, a competition which helps students to think on ways of reusing everyday materials. Participants will be provided a theme for which they have to model best creative and attractive products out of the waste materials.The competition's purpose is to raise environmental awareness and foster"
// "To challenge your skills, ELECTRA in association with COSPHI brings before you SKETCH IT UP,  Cad  Competition, a platform for students to showcase their designs and their creative skills."
