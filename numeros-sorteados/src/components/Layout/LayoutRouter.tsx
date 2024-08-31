import { Outlet } from "react-router";
import SortContainer from "../sortContainer/SortContainer";

export function LayoutRouter() {
  return (
    <>
    <SortContainer />
     <Outlet />
    </>
  )
}