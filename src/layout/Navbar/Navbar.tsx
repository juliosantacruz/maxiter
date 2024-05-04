import React from "react";
import "./Navbar.scss";
import NavBtn from "../../components/BtnNavbar/BtnNavbar";
import HomeIcon from "../../assets/icons/HomeIcon";
import { NavLink } from "react-router-dom";
import DetalleIcon from "@/assets/icons/DetalleIcon";
import { RoutesDirectory } from "@/routes/RoutesDirectory";

export default function Navbar() {
  const LeProject = {
    name: "Proyecto1",
    active: true,
  };
  const isProjectActive = LeProject.active ? true : false;

  // console.log(RoutesDirectory);

  return (
    <nav>
      <ul className="asideNavbar">
        <li>
          <a href="" className="navLink">
            <span className="icon">
              {/* <NewLogo className="navIcon" /> */}
            </span>
          </a>
        </li>
        <li>
          <NavLink to={RoutesDirectory.HOME.slug}>
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <HomeIcon className="navIcon" />
                </span>
                {RoutesDirectory.HOME.name}
              </NavBtn>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to={RoutesDirectory.DETALLES.slug}>
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <DetalleIcon className="navIcon" />
                </span>
                {RoutesDirectory.DETALLES.name}
              </NavBtn>
            )}
          </NavLink>
        </li>
        <li>
          {/* <NavLink
            className="navLink"
            to={RoutesDirectory.CATALOGO_INSUMOS.slug}
          >
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <CatalogoInsumosIcon className="navIcon" />
                </span>
                {RoutesDirectory.CATALOGO_INSUMOS.name}
              </NavBtn>
            )}
          </NavLink> */}
        </li>
        <li>
          {/* <NavLink
            className="navLink"
            to={RoutesDirectory.CALATALOGO_CONCEPTOS.slug}
          >
            {({ isActive }) => (
              <NavBtn isActive={isActive}>
                <span className="icon">
                  <CatalogoConceptosIcon className="navIcon" />
                </span>
                {RoutesDirectory.CALATALOGO_CONCEPTOS.name}
              </NavBtn>
            )}
          </NavLink> */}
        </li>
      </ul>
      {isProjectActive ? (
        <>
          {/* <NavbarProjectTitle /> */}
          <ul className="asideNavbar">
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.PRESUPUESTO.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <PresupuestoObraIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.PRESUPUESTO.name}
                  </NavBtn> */}
              {/* )}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.LISTADO_INSUMOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ListadoInsumosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.LISTADO_INSUMOS.name}
                  </NavBtn>
                )}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.LISTADO_CONCEPTOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ListadoConceptosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.LISTADO_CONCEPTOS.name}
                  </NavBtn>
                )}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.EXPLOSION_INSUMOS.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ExplosionInsumosIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.EXPLOSION_INSUMOS.name}
                  </NavBtn>
                )}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.ANALISIS_PU.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <AnalisisPUIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.ANALISIS_PU.name}
                  </NavBtn>
                )}
              </NavLink> */}
            </li>
            <li>
              {/* <NavLink
                className="navLink"
                to={RoutesDirectory.PROGRAMACION_OBRA.slug}
              >
                {({ isActive }) => (
                  <NavBtn isActive={isActive}>
                    <span className="icon">
                      <ProgramacionObraIcon className="navIcon" />
                    </span>
                    {RoutesDirectory.PROGRAMACION_OBRA.name}
                  </NavBtn>
                )}
              </NavLink> */}
            </li>
          </ul>
        </>
      ) : null}

      {/* <NavbarFooter /> */}
    </nav>
  );
}
