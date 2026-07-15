import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper"

const Contact = () => {
  return (
    <div className="flex flex-col h-full max-sm:min-h-0">
        <div id="window-header">
            <WindowControls target="contact"/>
            <h2>Contact Me</h2>
        </div>

        <div className="contact-body p-5 space-y-5">
            <img 
                src="/images/me.jpg" 
                alt="Anirudra"
                className="w-20 rounded-full"  
            />

            <h3>Let's Connect</h3>
            {/* <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p> */}
            <p>Got an idea? A bug bothering you? Or just want to talk tech
                <br/>I’m always open to building, fixing, and brainstorming.</p>
            <p>kisku.anirudra@gmail.com</p>

            <ul>
                {socials.map(({ id, bg, link, icon, text }) =>(
                    <li key={id} style={{ backgroundColor: bg }}>
                        <a 
                        href={link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={text}
                        >
                            <img src={icon} alt={text} className="size-5" />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

const ContactWindow = WindowWrapper(Contact, 'contact')

export default ContactWindow;
