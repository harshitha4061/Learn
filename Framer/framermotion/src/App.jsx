import React from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'

const App = () => {
  let customanimate = {
    initial: { opacity: 0 },
    animate: { opacity: 1, rotate: 360 },
    // animate:{[0,200,200,0]} like 0%,10%,30%,70%,100%
    exit: { opacity: 0 }
  };
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], [0, -200]); // Moves slower
  const yForeground = useTransform(scrollYProgress, [0, 1], [0, -50]); // Moves faster
  // useTransform(inputValue, inputRange, outputRange);
  return (
    <div>
      <AnimatePresence>
        {/* it helps in executing exit  */}
        <motion.div
          className="box"
          initial="initial"
          animate="animate"
          exit="exit"
          // animation exit will execute when element is unmounted from dom 
          transition={{ delay: 2, duration: 10, repeat: 3 }}
          variants={customanimate}
        />
      </AnimatePresence>


      <div className="motion-container">
        {/* Scroll Progress Bar */}
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Title Section */}
        <motion.h1 className="motion-title" whileHover={{ scale: 1.1, color: "#ff4081" }}>
          Motion Playground 🎨
        </motion.h1>

        {/* Scrollable Content */}
        <motion.div className="scroll-box">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            This is a scrollable section with some placeholder text to demonstrate
            viewport-based animations. As you scroll, elements can animate into
            view dynamically. Keep scrolling to explore more motion magic! ✨
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illo praesentium similique rerum aliquid itaque est totam fugit! Aspernatur exercitationem obcaecati officiis optio facere incidunt deserunt impedit. Corrupti incidunt at unde ad quod animi soluta suscipit expedita ducimus excepturi. Numquam reiciendis perferendis, cupiditate commodi porro est vel officia possimus explicabo ratione odit! Quasi exercitationem architecto voluptas magni aliquam sapiente tenetur consectetur numquam, expedita quas totam magnam ipsa eligendi doloribus atque adipisci, aliquid sed dignissimos nulla, error minus accusamus dolore vitae? Eos vero iusto, voluptate officia mollitia distinctio et illum, ipsam est pariatur ullam aspernatur esse soluta? Ipsum corporis reiciendis perspiciatis iure repellat facere temporibus ad quod molestias, eius explicabo! Inventore hic amet earum velit quia soluta autem qui minus unde. Rem doloribus fugit quibusdam unde ab earum nulla optio aliquam placeat similique amet odio inventore magni totam delectus harum, rerum fuga voluptatem expedita provident! Similique obcaecati iure doloribus? Dolores corrupti quibusdam repellendus quia autem. Temporibus vero commodi, illum error aliquid optio neque nobis. Deserunt fuga harum, et minima tenetur quam impedit totam at ea iure, corporis rem ratione, officiis quae similique aspernatur quos debitis accusamus modi corrupti culpa odio eius atque repudiandae. Sed magnam error distinctio rerum similique, soluta quibusdam omnis quae dolorum eos minima, quis modi voluptas. Odit error, modi, nesciunt quia vero provident accusantium doloribus laudantium et voluptatem nihil sint unde facilis itaque aut cupiditate. Harum ab, dolorem hic natus, eos odit odio, minima quaerat fugit fugiat reprehenderit officia nihil. Explicabo veritatis incidunt culpa modi iste! Iure ea beatae necessitatibus reprehenderit, dignissimos ex consequuntur sit voluptatibus non ipsum perferendis corrupti natus incidunt accusantium maiores eveniet dolore laboriosam, ab, quaerat molestiae aliquam! Commodi consequatur, ex ipsa voluptates esse mollitia odio! Laboriosam recusandae veritatis ratione sed error, pariatur a dicta natus laudantium sunt, repellendus, dolores temporibus numquam quas qui praesentium vitae? Error dolorem quod, voluptatem praesentium ipsam necessitatibus labore porro soluta, hic, officia iusto architecto at? Incidunt doloremque maiores voluptatibus. Eius, accusantium id! Fuga quasi facilis provident vitae asperiores! Obcaecati ipsam at eveniet beatae, temporibus rerum sed animi quas facere atque provident praesentium itaque vitae magnam eum alias? Est, harum quod deserunt praesentium omnis hic, vel, ipsa veritatis impedit accusantium perspiciatis quis. Nihil, architecto rerum corrupti dignissimos iure ipsa ipsam temporibus labore at perspiciatis adipisci quia officiis eius maxime commodi exercitationem aspernatur non soluta dolor eos aliquid. Ipsa ea quasi nostrum quos repellat nemo rerum hic reprehenderit est dolores iure, veniam itaque at delectus perspiciatis autem fuga nisi. Quod, rem minima possimus amet animi non autem dolor exercitationem atque quo voluptas. Aspernatur facilis blanditiis id non voluptatum! Quia quidem illum eaque voluptate, alias cum explicabo fugiat eveniet ipsa natus nemo temporibus tempora sit necessitatibus provident suscipit blanditiis ratione ut! Repudiandae iste culpa perferendis nam voluptatum provident amet consectetur molestiae quas, magnam aliquam quis, dolor ipsum aperiam accusantium reprehenderit cum ut dolorem fugiat? Temporibus consequatur ea vitae ducimus, voluptatibus natus vel iure nobis nisi neque, repellat illum, consectetur dicta deleniti accusantium nihil dignissimos est libero minus debitis nam? Earum at repellat ad tempora aspernatur laudantium aut modi sapiente? Natus at tempora amet cupiditate veniam quia porro, odit aperiam eveniet in debitis eligendi ut doloremque expedita, incidunt suscipit vel non repudiandae. Nesciunt perspiciatis saepe doloribus neque fugiat, beatae omnis laboriosam nostrum ducimus unde delectus? Repellat, possimus. Rerum, ab? Nulla distinctio, laboriosam nemo deserunt animi sunt neque repudiandae sequi aliquam in asperiores nam alias provident dicta ab dolore aperiam quod similique a facere ex rem quis debitis. Distinctio totam accusantium, expedita eaque laboriosam eius ratione rem corrupti! Ad at fugit modi facere dolor recusandae officia. Porro aut minima consequuntur iusto dolorum magni eum in, atque at, sapiente et accusantium. Amet, quas. Alias ipsum ratione, itaque enim fugit tempore eveniet quaerat saepe perferendis, modi beatae obcaecati. Magnam praesentium nesciunt dolorum ad vel omnis assumenda, mollitia nostrum molestiae maiores enim. Quo amet neque asperiores dolorum, porro quod dolor, praesentium placeat officia tenetur maxime! Architecto similique vitae dolore consequuntur molestiae obcaecati nostrum, maxime earum porro corrupti ipsa sequi quia natus doloribus eos repellendus perspiciatis quibusdam vero optio laborum alias odit tenetur libero! Saepe culpa necessitatibus laboriosam repellendus rem veritatis ab! Odio fugit deserunt labore nesciunt eos aliquid, enim blanditiis asperiores vitae, excepturi suscipit praesentium quis nam modi esse voluptatum et sunt magnam nobis pariatur voluptas voluptate iusto. Sapiente, vel! Hic minus corrupti, aliquam rem voluptatibus ipsa similique recusandae perspiciatis nulla laborum nam, doloremque atque? Laudantium omnis fugit iusto incidunt, hic ducimus vero amet dolorum repellat quos molestiae animi laborum illo quibusdam ad placeat odit harum. Quas distinctio nemo accusantium iure est! Nostrum laboriosam odit at magni consectetur officiis, quas dolores! Nemo consectetur fugiat asperiores. Necessitatibus dolor illo libero neque natus voluptate nemo accusamus corporis maxime accusantium odio, dolores autem fuga deserunt eveniet nobis porro quos, culpa delectus! Illum amet, assumenda et corrupti nobis veniam molestiae officia pariatur consequatur in recusandae culpa reiciendis quisquam at magnam omnis, repudiandae odit unde ducimus delectus! Soluta officia commodi, reprehenderit, mollitia tempore molestiae porro omnis possimus, quas voluptatibus quisquam nulla sit aspernatur nemo iure enim fuga! Qui minima eos nulla iusto, quo recusandae, cupiditate consequatur distinctio ipsam, sunt corporis exercitationem alias! Labore necessitatibus ratione odio tempore, laudantium, omnis ad incidunt perspiciatis, maxime in aliquam cumque voluptatum dolorem non quod fugit possimus ipsa nihil nemo. Vel, impedit maiores mollitia reprehenderit pariatur laboriosam voluptates dolorum aliquid. Similique architecto corporis amet nobis ipsa iusto, nemo voluptates nostrum ullam aperiam. Voluptates impedit laudantium mollitia exercitationem doloribus suscipit qui quae quas eveniet, illo quibusdam sapiente, sint saepe animi nihil ut placeat odit id voluptatem laboriosam rem. Illo sint deserunt eius cumque adipisci dignissimos architecto iste minus possimus dolorum quidem perferendis deleniti, non impedit repudiandae veniam dolor distinctio consectetur, obcaecati neque? Veniam saepe sunt beatae quo. Perferendis, dignissimos laudantium! Unde repellat nemo dicta velit expedita voluptatem exercitationem eum aspernatur veritatis labore possimus, ab ducimus sunt beatae ut sint nostrum praesentium, a sit dolorum omnis delectus quae fugit! Mollitia fugit voluptate, earum sunt quos iste placeat voluptatibus magnam? Libero autem dolor consequuntur pariatur eos odit doloribus perspiciatis quod.
          </motion.p>
        </motion.div>

        {/* Staggered Buttons */}
        <motion.div
          className="button-group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {["One", "Two", "Three"].map((label) => (
            <motion.button
              key={label}
              className="motion-button"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              {label}
            </motion.button>
          ))}
        </motion.div>

        {/* Draggable & Hoverable Boxes */}
        <div className="box-container">
          {["A", "B", "C"].map((label) => (
            <motion.div
              key={label}
              className="motion-box"
              whileTap={{scale: 1.2}}
              whileHover={{ rotate: 10 }}
              whileDrag={{ scale: 1.1 }}
              drag
              dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
              // dragDirectionLock={True}
            >
              {label}
            </motion.div>
            //layout movement increase in size prevents happening in sudden jump
          ))}
        </div>
      </div>

      {/* parallex effect */}
      <div style={{ height: "200vh", position: "relative" }}>
        {/* Background moves slower */}
        <motion.div
          style={{
            y: yBackground,
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100vh",
            background: "url('/mountain.jpg') center/cover",
            zIndex: -1,
          }}
        />

        {/* Foreground (content) moves faster */}
        <motion.h1
          style={{
            y: yForeground,
            position: "relative",
            fontSize: "50px",
            color: "white",
            textAlign: "center",
            marginTop: "50vh",
          }}
        >
          🚀 Parallax Effect
        </motion.h1>

      </div>

    </div>

  )
}

export default App

