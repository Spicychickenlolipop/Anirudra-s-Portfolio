import dayjs, { Dayjs } from "dayjs";
import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";
import useControlStore from "#store/control";


const Navbar = () => {
    const { openWindow } = useWindowStore();
//     const { openWindow, closeWindow, windows } = useWindowStore();
// const { setActiveLocation } = useLocationStore();
const { togglePanel } = useControlStore();
  return (
    <nav>
        <div>
            <img src='/images/logo.svg' alt='logo'/>
            <p className='font-bold'>Anirudra's Portfolio</p>

            <ul>
                {navLinks.map(({ id, name, type })=>(
                    <li key={id} onClick={()=> openWindow(type)}>
                        <p>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <ul>
                {/* {navIcons.map(({ id, img })=>(
                    <li key={id}>
                        <img src={img} className="icon-hover"
                         alt={`icon-${id}`}
                        />
                    </li>
                ))} */}
                  {navIcons.map((icon) => (
                    //   <img
                    //       key={icon.id}
                    //       src={icon.img}
                    //       className="cursor-pointer"
                    //       onClick={() => {
                    //           if (icon.id === 4) {
                    //               togglePanel(); // ✅ OPEN CONTROL CENTER
                    //           }
                    //       }}
                    //   />
                      <img
                          key={icon.id}
                          src={icon.img}
                          id={icon.id === 4 ? "control-toggle" : undefined} // 👈 IMPORTANT
                          className="cursor-pointer"
                          onClick={() => {
                              if (icon.id === 4) {
                                  togglePanel();
                              }
                          }}
                      />
                  ))}
            </ul>

            <time>{dayjs().format("ddd MMM D h:mm A")}</time>
        </div>
    </nav>
  );
};

export default Navbar


