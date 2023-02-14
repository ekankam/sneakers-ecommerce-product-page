"use client";
import { createContext, useContext, useState } from "react";

type SidebarType = {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
};

const initialState = {
  isOpen: false,
  handleOpen: Function,
  handleClose: Function,
}

type SidebarProviderProps = {
  children: React.ReactNode,

}

const ContextSidebar = createContext<SidebarType>(initialState);

export function SidebarProvider({ children }: SidebarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <ContextSidebar.Provider value={{
      handleOpen,
      handleClose,
      isOpen,
    }}>{children}</ContextSidebar.Provider>
  );
}

export default ContextSidebar;