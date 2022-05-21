import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Anasayfa',
        path: '/ ',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Departmanlar',
        path: '/departments',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Kullanıcılar',
        path: '/workers',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Stok',
        path: '/stok',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Grafikler',
        path: '/graphics',
        icon: <IoIcons.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]