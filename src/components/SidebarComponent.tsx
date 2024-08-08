
"use client";

import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

export default function SidebarComponent() {
  return (
    <Sidebar aria-label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upcoming
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}  labelColor="dark">
            Today
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            Calendar
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Sticky Wall
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Personal
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            Work
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            List 1
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
