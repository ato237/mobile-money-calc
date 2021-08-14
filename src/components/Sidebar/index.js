import React from "react";
import { SidebarContainer, Icon, CloseIcon } from "./SidebarElements";
import { SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from "./SidebarElements";


const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to='about' onClick={toggle}>
                      Calculate Charges
                  </SidebarLink>
                  <SidebarLink to='news' onClick={toggle}>
                      About
                  </SidebarLink>
                  <SidebarLink to='services' onClick={toggle}>
                      Services
                  </SidebarLink>
              </SidebarMenu>
              <SideBtnWrap>
                  <SidebarRoute to ='/signin' onClick={toggle}>
                      Sign Up
                  </SidebarRoute>
              </SideBtnWrap>
          </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
