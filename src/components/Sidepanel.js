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
                       
                        Este es un espacio para que comparta sus pensamientos, ideas e inquietudes sobre el Shenandoah Rail Trail planificado. ¡Identificamos <b>4 temas clave</b> y ahora queremos saber de usted nuevamente!
                        </p>


                        <div className="infoType">
                        <img className="textIcon" src="/icons/special_places.png" alt="" />
                            <p>
                                <b>
                                Lugares especiales:</b> Usa el{" "}
                                <img
                                    className="inTextIcon climate"
                                    src="/icons/tool_add_special_places.png"
                                    alt=""
                                />{" "}
                                para identificar lugares especiales para usted.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/connections.png" alt="" />
                            <p>
                                <b>Conexiones:</b> Use {" "}<img
                                    className="inTextIcon"
                                    src="/icons/tool_add_connections.png"
                                    alt=""
                                />{" "}
                                para identificar posibles conexiones hacia y desde Rail Trail.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/general_ideas.png" alt="" />
                            <p>
                                <b>Ideas generales:</b> Use {" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_general_ideas.png"
                                    alt=""
                                />{" "}
                                
                                identificar ideas generales para mejorar Rail Trail.
                            </p>
                        </div>
                        
                        <div className="infoType">
                            <img className="textIcon" src="/icons/potential_issues.png" alt="" />
                            <p>
                                <b>Problemas potenciales:</b> Use {" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_potential_issues.png"
                                    alt=""
                                />{" "}
                                para identificar problemas potenciales con el plan Rail Trail actual.
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
                        This is a space for you to share your thoughts, ideas, and concerns surrounding the planned Shenandoah Rail Trail. We identified <b>4 key themes</b> and now we want to hear from you again!
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
                                to indentify places special to you.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/connections.png" alt="" />
                            <p>
                                <b>Accessibility:</b> Use the {" "}<img
                                    className="inTextIcon"
                                    src="/icons/tool_add_connections.png"
                                    alt=""
                                />{" "}
                                to identify possible connections to and from the Rail Trail.
                            </p>
                        </div>
                        <div className="infoType">
                            <img className="textIcon" src="/icons/general_ideas.png" alt="" />
                            <p>
                                <b>Vibrancy:</b> Use the{" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_general_ideas.png"
                                    alt=""
                                />{" "}
                                to identify general ideas to improve the Rail Trail.
                            </p>
                        </div>
                        
                        <div className="infoType">
                            <img className="textIcon" src="/icons/potential_issues.png" alt="" />
                            <p>
                                <b>Community:</b> Use the{" "}
                                <img
                                    className="inTextIcon"
                                    src="/icons/tool_add_potential_issues.png"
                                    alt=""
                                />{" "}
                                to identify potential issues with the current Rail Trail plan.
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
                            src="/icons/stickers.gif"
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>
                        <p>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit: {" "}
                        </p>
                        <p>
                            <b>
                                <a
                                    target="_blank"
                                    href="https://shenandoahalliance.org/project/shenandoah-rail-trail-partnership/"
                                >
                                    www.shenandoahalliance.org 
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
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                        </p>
                        <p>
                        Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                        </p>                
                        <p>
                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit: {" "}
                        </p>
                        <p>
                            <b>
                                <a
                                    target="_blank"
                                    href="https://shenandoahalliance.org/project/shenandoah-rail-trail-partnership/"
                                >
                                    www.shenandoahalliance.org
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
        </Sidebar>
    );
}

export default Sidepanel;
