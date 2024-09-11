"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Ensure useRouter is imported from next/router
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Avatar
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon
} from "@heroicons/react/24/solid";
import {
  ChevronDownIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { IoBus } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa6";
import { LuSheet } from "react-icons/lu";
import { PiSpeakerHighDuotone } from "react-icons/pi";
import { TbArrowBigDownLines } from "react-icons/tb";

export function Sidebar() {
  const [open, setOpen] = React.useState(0);
  const router = useRouter(); // Initialize useRouter here

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const isActive = (path) => router.asPath === path; // Compare with router.asPath

  return (
    <div className="fixed h-full w-64 bg-navy text-content shadow-xl">
      <Card className="h-full w-full bg-navy shadow-none rounded-none">
        <div className="mb-2 flex items-center gap-4 p-4">
          <Avatar
            variant="circular"
            size="sm"
            alt="School Logo"
            className="border h-10 w-10 rounded-full border-gray-900 p-0.5"
            src="/Images/schoolLogo.png"
          />
          <Typography variant="h5" className="text-graysky">School Name</Typography>
        </div>
        <List className="text-graysky">
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className={`p-0 ${isActive('/faculty/addfaculty') || isActive('/faculty/facultyatt') || isActive('/faculty/facultyreport') || isActive('/faculty/facultylist') ? 'bg-orange' : ''}`} selected={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 mb-2">
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Faculty</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="rounded-lg">
              <List className="px-4 font-medium">
                <Link href="/faculty/addfaculty" passHref>
                  <ListItem className={isActive('/faculty/addfaculty') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <LuSheet strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Add Faculty
                  </ListItem>
                </Link>
                <Link href="/faculty/facultyatt" passHref>
                  <ListItem className={isActive('/faculty/facultyatt') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <LuSheet strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Faculty Attendance
                  </ListItem>
                </Link>
                <Link href="/faculty/facultyreport" passHref>
                  <ListItem className={isActive('/faculty/facultyreport') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <FaChartBar strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Faculty Report
                  </ListItem>
                </Link>
                <Link href="/faculty/facultylist" passHref>
                  <ListItem className={isActive('/faculty/facultylist') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <FaChartBar strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Faculty List
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className={`p-0 ${isActive('/student/addstudent') || isActive('/student/studentreport') || isActive('/student/studentatt') || isActive('/student/studentlist') ? 'bg-orange' : ''}`} selected={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <ShoppingBagIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Student</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="px-4 p-0">
                <Link href="/student/addstudent" passHref>
                  <ListItem className={isActive('/student/addstudent') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Add Student
                  </ListItem>
                </Link>
                <Link href="/student/studentreport" passHref>
                  <ListItem className={isActive('/student/studentreport') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Student Report
                  </ListItem>
                </Link>
                <Link href="/student/studentatt" passHref>
                  <ListItem className={isActive('/student/studentatt') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <FaChartBar strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Student Attendance
                  </ListItem>
                </Link>
                <Link href="/student/studentlist" passHref>
                  <ListItem className={isActive('/student/studentlist') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <FaChartBar strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Student List
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
              />
            }
          >
            <ListItem className={`p-0 ${isActive('/bus/addbus') || isActive('/bus/totalbus') || isActive('/bus/busreport') ? 'bg-orange' : ''}`} selected={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                <ListItemPrefix>
                  <IoBus className="h-5 w-5" />
                </ListItemPrefix>
                <Typography className="mr-auto font-normal">Buses</Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="px-4 p-0">
                <Link href="/bus/addbus" passHref>
                  <ListItem className={isActive('/bus/addbus') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <LuSheet strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Add Bus
                  </ListItem>
                </Link>
                <Link href="/bus/totalbus" passHref>
                  <ListItem className={isActive('/bus/totalbus') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <LuSheet strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Total Bus
                  </ListItem>
                </Link>
                <Link href="/bus/busreport" passHref>
                  <ListItem className={isActive('/bus/busreport') ? 'bg-orange' : ''}>
                    <ListItemPrefix>
                      <FaChartBar strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Bus Report
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>

          <hr className="my-2 border-blue-gray-50" />

          <Link href="/announcement" passHref>
            <ListItem className={isActive('/announcement') ? 'bg-orange' : ''}>
              <ListItemPrefix>
                <PiSpeakerHighDuotone className="h-5 w-5" />
              </ListItemPrefix>
              Announcement
            </ListItem>
          </Link>
          <Link href="/arrival" passHref>
            <ListItem className={isActive('/arrival') ? 'bg-orange' : ''}>
              <ListItemPrefix>
                <TbArrowBigDownLines className="h-5 w-5" />
              </ListItemPrefix>
              Arrival
            </ListItem>
          </Link>
          <Link href="/login" passHref>
            <ListItem className={isActive('/login') ? 'bg-orange' : ''}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </Link>
        </List>
      </Card>
    </div>
  );
}
