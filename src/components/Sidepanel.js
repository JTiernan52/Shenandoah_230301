import React, { useState, Fragment } from "react";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";
import '../globals.css'

import SideComment from "./SideComment";
import "./Sidepanel.css";

function Sidepanel(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [selected, setSelected] = useState("home");
    const [language, setLanguage] = useState("English");

    let comments = props.comments;

    const open = (id) => {
        if (selected === id && collapsed === false) {
            setCollapsed(true);
        } else {
            setCollapsed(false);
            setSelected(id);
        }
    };

    return (
        <Sidebar
            id="sidebar"
            position="left"
            collapsed={collapsed}
            selected={selected}
            onOpen={(id) => open(id)}
            onClose={() => setCollapsed(true)}
            closeIcon={<img className="close" alt="" src="/icons/close.svg" />}
        >
            <Tab
                id="home"
                header="Home"
                icon={
                    selected !== "home" ? (
                        <img className="home" alt="" src="/icons/home.png" />
                    ) : (
                        <img
                            className="home"
                            alt=""
                            src="/icons/home_live.png"
                        />
                    )
                }
                active
            >
                {language === 'Spanish' ? 
                    <div>
                        <p>
                        </p>
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("English")}
                        >
                            in English
                        </button>
                        <p>
                        <i>traducción a través de Google Translate</i>
                        </p>
                        <h4>¡Bienvenido al mapa de la comunidad de Shenandoah Rail Trail!</h4>
                        <p>
                       
                        Este es un espacio para que comparta sus pensamientos, ideas e inquietudes sobre el Shenandoah Rail Trail planificado. ¡Identificamos <b>4 temas clave</b> y ahora queremos saber de usted!
                        </p>


                        <div className="infoType">
                        <img className="textIcon" src="/icons/special_places.png" alt="" />
                            <p>
                                <b>
                                Lugares especiales:</b> Usa la{" "}
                                <img
                                    className="inTextIcon climate"
                                    src="/icons/tool_add_special_places.png"
                                    alt=""
                                />{" "}
                                <b>Estrella</b> para identificar lugares cerca del sendero que sean especiales para usted y que otros puedan estar interesados ​​en visitar.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/connections.png" alt="" />
                            <p>
                                <b>Conexiones:</b> Usa el {" "}<img
                                    className="inTextIcon"
                                    src="/icons/tool_add_connections.png"
                                    alt=""
                                />{" "}
                                <b>Puente</b> para identificar posibles conexiones hacia y desde Rail Trail, como estacionamientos y ubicaciones de inicio de senderos..
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/general_ideas.png" alt="" />
                            <p>
                                <b>Ideas generales:</b> Usa la {" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_general_ideas.png"
                                    alt=""
                                />{" "}
                                Utilice la <b>Bombilla</b> para identificar ideas generales para Rail Trail.
                            </p>
                        </div>
                        
                        <div className="infoType">
                            <img className="textIcon" src="/icons/potential_issues.png" alt="" />
                            <p>
                                <b>Problemas potenciales:</b> Utiliza el {" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_potential_issues.png"
                                    alt=""
                                />{" "}
                                <b>Signo de Exclamación</b> para identificar dónde puede haber situaciones que requieran atención adicional para asegurarse de que el sendero sea un buen vecino.
                            </p>
                        </div>
                        

                        <p>
                        Cada vez que coloque un pin, agregue un comentario para compartir lo que está pensando. Puedes agregar tantos pines como quieras.
                        </p>
                        <p>
                        Al hacer clic en "Publicar"("Post"), su icono y el comentario se agregarán al mapa. Puede cambiar sus comentarios hasta que cierre el mapa. Sea respetuoso, ya que todos pueden ver los comentarios que comparte.
                        </p>
                        <p>
                        ¡Lo más importante es que comparta este mapa con familiares y amigos que se preocupan por Shenandoah Rail Trail!
                        </p>
                        <p>
                            <i>Si el mapa es difícil de usar o incompatible con su lector de pantalla, deje un mensaje en <a href="tel:781-393-2480">781-393-2480</a> y un miembro de nuestro equipo de planificación se comunicará con usted.</i>
                        </p>
                        <p>
                        <button
                            className="getStarted button--primary"
                            onClick={() => setCollapsed(true)}
                        >
                            ¡Empezar!
                        </button>
                        </p>
                        
                        
                    </div>
                    :
                    <div>
                         <p>
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("Spanish")}
                        >
                            en Español
                        </button>
                        </p>
                        <p>
                        </p>
                        <h4>Welcome to the community map for the Shenandoah Rail Trail!</h4>
                        <p>
                        This is a space for you to share your thoughts, ideas, and concerns surrounding the planned Shenandoah Rail Trail. We identified <b>4 key themes</b> and now we want to hear from you!
                        </p>
                        <p>
                        Use the map to identify places in and around the Rail Trail that are important to you. Click to pick up an icon of one of the 4 key themes related to your comment from the sidebar menu. Click again to pin your icon on the map where it belongs and share your thoughts with us.
                        </p>


                        <div className="infoType">
                            <img className="textIcon" src="/icons/special_places.png" alt="" />
                            <p>
                                <b>Special Places:</b> Use the{" "}
                                <img
                                    className="inTextIcon climate"
                                    src="/icons/tool_add_special_places.png"
                                    alt=""
                                />{" "}
                                <b>Star</b> to identify places near the trail that are special to you and others may be interested in visting.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/connections.png" alt="" />
                            <p>
                                <b>Connections:</b> Use the {" "}<img
                                    className="inTextIcon"
                                    src="/icons/tool_add_connections.png"
                                    alt=""
                                />{" "}
                                <b>Bridge</b> to identify possible connections to and from the Rail Trail such as parking and trail head locations.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/general_ideas.png" alt="" />
                            <p>
                                <b>Ideas:</b> Use the{" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_general_ideas.png"
                                    alt=""
                                />{" "}
                                <b>Light Bulb</b> to identify general ideas for the Rail Trail.
                            </p>
                        </div>
                        
                        <div className="infoType">
                            <img className="textIcon" src="/icons/potential_issues.png" alt="" />
                            <p>
                                <b>Special Considerations:</b> Use the{" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_potential_issues.png"
                                    alt=""
                                />{" "}
                                <b>Exclamation Point</b> to identify where there might be situations requiring extra attention to make sure the trail is a good neighbor.
                            </p>
                        </div>
                        

                        <p>
                        Each time you place a pin, add a comment to share what you are thinking. You can add as many pins as you want.
                        </p>
                        <p>
                        When you click “Post” your icon and comment will be added to the map. You can change your comments until you close the map. Please be respectful, as everyone can see the comments you share.
                        </p>
                        <p>
                        Most importantly, please share this map with family and friends who care about the Shenandoah Rail Trail!
                        </p>
                        <p>
                            <i>If the map is difficult to use or incompatible with your screen reader, please leave a message at <a href="tel:781-393-2480">781-393-2480</a>, and a member of our planning team will contact you.</i>
                        </p>
                <p>
                <button
                    className="getStarted button--primary"
                    onClick={() => setCollapsed(true)}
                >
                    Get Started
                </button>
                </p>
                
               
                </div>
                }
                
            </Tab>

            <Tab
                id="infoTab"
                header="About the Plan"
                icon={
                    selected !== "infoTab" ? (
                        <img
                            className="info"
                            alt=""
                            src="/icons/new_info.png"
                        />
                    ) : (
                        <img
                            className="info"
                            alt=""
                            src="/icons/info_live.png"
                        />
                    )
                }
            >
                <p>
                        <img
                            className="Logo"
                            alt="Medford_gif"
                            src="/icons/instead of Alliance logo.jpg"
                            width="300"
                            class="center"
                        />
                </p>
                {language === 'Spanish' ? 
                    <div>
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("English")}
                        >
                            in English
                        </button>
                        <p>

                        </p>
                        <p>
                        <i>traducción a través de Google Translate</i>
                        </p>
                        <p>
                        El Shenandoah Rail Trail convertirá un corredor ferroviario de vía única no utilizado entre Broadway y Front Royal en un sendero de usos múltiples de casi 50 millas que volverá a conectar comunidades, empresas, escuelas y muchos recursos culturales e históricos locales   
                        </p>
                        <p>
                        El corredor ferroviario, que alguna vez fue un centro comunitario y económico de ciudades desde Broadway hasta Front Royal, no ha visto trenes desde 1989. Las vías ahora están cubiertas de maleza y, en algunos casos, completamente inutilizables.
                        </p>
                        <p>
                        Las comunidades a lo largo de la ruta están trabajando juntas para recuperar el corredor como un sendero para caminar, trotar, andar en bicicleta y más. Y ahora, necesitamos su opinión para construir el mejor sendero para nuestra región.
                        </p>
                        <p>
                        <i>Un sendero ferroviario de Shenandoah:</i>
                        </p>
                        <p>
                        <b>CONECTAR:</b> Arriba y abajo de la ruta, el sendero conecta a los estudiantes con la escuela, los empleados con el trabajo, los clientes con las tiendas, los comensales con los restaurantes y los miembros de la comunidad con los parques, ríos y sitios históricos. 
                        </p>
                        <p>
                        <b>BRINDAR OPORTUNIDAD PARA TODOS:</b> En el Valle, estamos rodeados de oportunidades para disfrutar del aire libre, pero muchos de los senderos y caminos son remotos y, por la naturaleza del terreno, son adecuados para usuarios de senderos avanzados. Nuestro sendero ferroviario es plano, principalmente rural y pintoresco, y se puede acceder fácilmente desde muchos pueblos y vecindarios. Será una forma segura y fácil de salir a caminar, correr o rodar con miembros de la familia de todas las edades y habilidades. 
                        </p>
                        <p>
                        <b>TRANSFORMAR:</b> La adición de un sendero a nuestros servicios locales de primer nivel atraerá a las empresas que buscan ubicarse en un lugar que ofrezca una alta calidad de vida a las personas que emplean. Esto significa el potencial de nuevas oportunidades de trabajo en muchos sectores. Y, los visitantes del sendero brindarán oportunidades económicas para el espíritu empresarial y para que las comunidades disfruten de negocios locales prósperos en las ciudades.
                        </p>
                        <p>
                        Para más información, por favor visítenos en: {" "}
                        </p>
                        <p>
                            <b>
                                <a
                                    target="_blank"
                                    href="shenandoahrailtrail.org"
                                >
                                    www.shenandoahrailtrail.org 
                                </a>
                            </b>
                        </p>
                        
                    </div>
                :
                    <div>
                        
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("Spanish")}
                        >
                            en Español
                        </button>
                        <p>
                        </p>
                        <p>
                        The Shenandoah Rail Trail will convert an unused single-track railroad corridor between Broadway and Front Royal into a multi-use, almost 50-mile trail reconnecting communities, businesses, schools and many local cultural and historical resources.
                        </p>
                        <p>
                        The rail corridor, once a community and economic hub of towns from Broadway to Front Royal, has not seen trains as far back as 1989. The tracks are now overgrown and, in some cases, completely unusable. 
                        </p>
                        <p>
                        Communities along the route are working together to reclaim the corridor as a trail for walking, jogging, cycling and more. And now, we need your input to build the best trail for our region. 
                        </p>                
                        <p>
                        <i>A Shenandoah Rail Trail will:</i>
                        </p>
                        <p>
                        <b>CONNECT:</b> Up and down the route, the trail connects students to school, employees to work, customers to shops, diners to restaurants and community members to parks, rivers and historic sites. 
                        </p>
                        <p>
                        <b>PROVIDE OPPORTUNITY FOR EVERYONE:</b> In the Valley, we are surrounded by opportunities to enjoy the outdoors, but many of the trails and paths are remote and, by the nature of the terrain, suited for advanced trail users. Our rail trail is flat, primarily rural and scenic, and easily accessed from many towns and neighborhoods. It will be a safe and easy way to get outside to walk, run or roll with family members of all ages and abilities. 
                        </p>
                        <p>
                        <b>TRANSFORM:</b> The addition of a trail to our first-rate local amenities will attract companies that seek to locate in a place that offers a high quality of life to the folks they employ. This means the potential for new job opportunities across many sectors. And, visitors to the trail will provide economic opportunities for entrepreneurship and for communities to enjoy thriving local businesses in towns.
                        </p>
                        <p>
                        For more information, please visit us at: {" "}
                        </p>
                        <p>
                            <b>
                                <a
                                    target="_blank"
                                    href="shenandoahrailtrail.org"
                                >
                                    www.shenandoahrailtrail.org
                                </a>
                            </b>
                        </p>
                
                </div>
                }
                
            </Tab>

            <Tab
                id="commentsTab"
                header="Comments"
                icon={
                    selected !== "commentsTab" ? (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/side_comments.png"
                        />
                    ) : (
                        <img
                            className="comments"
                            alt=""
                            src="/icons/comments_live.png"
                        />
                    )
                }
            >
                {comments &&
                    Object.keys(comments).length > 0 &&
                    Object.keys(comments).map((id) => (
                        <Fragment key={id}>
                            {!comments[id].hidden && (
                                <SideComment
                                    key={id}
                                    comment={{ id: id, ...comments[id] }}
                                    map={props.map}
                                    latlng={{
                                        lat: props.points[id].lng,
                                        lng: props.points[id].lat,
                                    }}
                                ></SideComment>
                            )}
                        </Fragment>
                    ))}
            </Tab>

            <Tab
                id="legend"
                header="Legend"
                icon={
                    selected !== "legend" ? (
                        <img className="legend" alt="" src="/icons/Legend.png" />
                    ) : (
                        <img
                            className="legend"
                            alt=""
                            src="/icons/Legend.png"
                        />
                    )
                }
                active
            >
                {language === 'Spanish' ? 
                    <div>
                        <p>
                        </p>
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("English")}
                        >
                            in English
                        </button>
                        <p>
                        <i>traducción a través de Google Translate</i>
                        </p>
                        


                        <div className="legendContainer">
                        <img  className="legendImage" src="/icons/Legend - Rail Trail.png" alt="" /> = vía férrea
                        </div>
                        
                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - National Trails.png" alt="" />
                             <p>= senderos en terrenos estatales y federales</p>
                        </div>

                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Rivers and Streams.png" alt="" />
                            <p>= Rios y corrientes</p>
                        </div>
                        
                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Towns.png" alt="" />
                            <p>= Pueblos</p>
                        </div>

                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Trail Heads.png" alt="" />
                            <p>= Cabezas de sendero</p>
                        </div>
                        


                        
                        
                    </div>
                    :
                    <div>
                         <p>
                        <button
                            className="spanish button--primary"
                            onClick={() => setLanguage("Spanish")}
                        >
                            en Español
                        </button>
                        </p>
                        <p>



                        <div className="legendContainer">
                        <img className="legendImage" src="/icons/Legend - Rail Trail.png" alt="" />  
                        <p> = Rail Trail</p>
                        </div>
                        
                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - National Trails.png" alt="" />
                            <p> = Trails on State and Federal Land</p>
                        </div>

                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Rivers and Streams.png" alt="" />
                            <p> = Rivers and Streams</p>
                        </div>
                        
                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Towns.png" alt="" /> 
                            <p> = Towns</p>
                        </div>

                        <div className="legendContainer">
                            <img className="legendImage" src="/icons/Legend - Trail Heads.png" alt="" />
                            <p> = Trail Heads</p>
                        </div>
                        </p>

                
               
                </div>
                }
                
            </Tab>
        </Sidebar>
    );
}

export default Sidepanel;
