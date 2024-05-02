import { useEffect, useState } from "react";
import s from "./navbar.module.scss";

const sections = [
  //!Cambia solamente los title para que el desplazamiento de la pagina funcione
  { title: "Login", id: "login" },
  { title: "section1", id: "section1" },
  { title: "section2", id: "section2" },
  { title: "section3", id: "section3" },
  { title: "section4", id: "section4" },
  { title: "section5", id: "section5" },
  { title: "section6", id: "section6" },
  { title: "section7", id: "section7" },
  { title: "section8", id: "section8" },
  { title: "section9", id: "section9" },
  { title: "section10", id: "section10" },
];

interface Props {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navbar({ showNavbar, setShowNavbar }: Props) {
  const [styleSelected, setStyleSelected] = useState<"show" | "hidden">(
    "hidden"
  );
  console.log(showNavbar);
  useEffect(() => {
    showNavbar ? setStyleSelected("show") : setStyleSelected("hidden");
  }, [showNavbar]);
  return (
    <div className={s[styleSelected]}>
      {sections.map((data) => (
        <a href={`#${data.id}`} onClick={() => setShowNavbar(false)}>
          {data.title}
        </a>
      ))}
    </div>
  );
}
