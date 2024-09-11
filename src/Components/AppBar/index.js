"use client"
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";




import Image from "next/image";

const profileMenuItems = [
    {
        label: "My Profile",
        icon: InboxIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border h-10 w-10 rounded-full border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <PresentationChartBarIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
                <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors 
                  ${isLastItem 
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" // Red hover effect for last item
                    : "hover:bg-gray-100 focus:bg-gray-100 active:bg-gray-200"      // Default hover effect for other items
                  }`
                }
              >
                {/* Icon */}
                {React.createElement(icon, {
                  className: `h-4 w-4  ${isLastItem ? "text-red-500" : "text-gray-600"}`, // Red for last item, gray for others
                  strokeWidth: 2,
                })}
              
                {/* Label */}
                <Typography
                  as="span"
                  variant="small"
                  className={`font-normal ${isLastItem ? "text-red-500" : "text-gray-900"} transition-colors`} // Red text for last item, gray for others
                >
                  {label}
                </Typography>
              </MenuItem>
              
            );
          })}
        </MenuList>
      </Menu>
    );
}



export function AppBar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    return (
        <Navbar className=" p-2 min-w-full lg:pl-5">
            <div className="relative  flex items-center justify-between text-blue-gray-900">
                <Image width={60} src={'/Images/schoolLogo.png'} height={40} className="ml-14 lg:ml-12"/>
                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={toggleIsNavOpen}
                    className="ml-auto mr-2 lg:hidden"
                >
                    {/* <Bars2Icon className="h-6 w-6" /> */}
                </IconButton>
                <ProfileMenu />
            </div>

        </Navbar>
    );
}