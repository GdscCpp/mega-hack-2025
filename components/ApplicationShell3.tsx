"use client";

import {
    Badge,
    Button,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    Input,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@relume_io/relume-ui";
import {
    BiArchive,
    BiBarChartAlt2,
    BiBell,
    BiChat,
    BiCog,
    BiFile,
    BiHelpCircle,
    BiHome,
    BiLayer,
    BiPieChartAlt2,
    BiSearch,
    BiStar,
} from "react-icons/bi";
import { MdTrendingUp } from "react-icons/md";
import { RxChevronDown, RxChevronRight, RxCross2 } from "react-icons/rx";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

const menuItems = [
    {
        title: "Home",
        url: "/",
        icon: BiHome,
    },
    {
        title: "Forum",
        url: "/forum",
        icon: BiChat,
    }
];

// @ts-ignore
const footerItems = [
    {
        title: "Settings",
        icon: BiCog,
        url: "#"
    }
];

export const ApplicationShell3 = ({ children }: { children: React.ReactNode }) => {
    return (
        <section id="relume">
            <AppSidebar>
                <div className="relative flex-1 bg-primary text-off-white">
                    <Topbar />
                    <div className="h-[calc(100vh-4.5rem)] overflow-auto">
                        <div className="container px-6 py-8 md:px-8 md:py-10 lg:py-12">
                            <div className="grid grid-cols-1 gap-12">
                                <div className="flex h-screen items-center justify-center py-6 text-center text-off-white">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppSidebar>
        </section>
    );
};

const Topbar = () => {
    const [isSearchIconClicked, setIsSearchIconClicked] = useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <>
            <div className="sticky top-0 z-30 hidden h-auto min-h-16 w-full items-center px-6 md:min-h-18 lg:flex lg:px-8">
                <div className="mx-auto grid size-full grid-cols-1 items-center justify-end justify-items-end gap-4 lg:grid-cols-[1fr_max-content] lg:justify-between lg:justify-items-stretch">
                    <div className="hidden w-full max-w-md lg:block">
                        <Input className="w-full rounded-[10px] bg-secondary border-none text-slate" placeholder="Search" icon={<BiSearch className="size-6" />} />
                    </div>
                    <TopbarActions
                        isSearchIconClicked={isSearchIconClicked}
                        setIsSearchIconClicked={setIsSearchIconClicked}
                        isDropdownOpen={isDropdownOpen}
                        setIsDropdownOpen={setIsDropdownOpen}
                    />
                </div>
            </div>

            <div className="fixed left-0 right-0 top-0 z-30 flex min-h-16 w-full items-center justify-between border-b border-border-slate bg-primary px-6 lg:hidden">
                <div className="flex items-center gap-4">
                    <SidebarTrigger />
                    <a href="#" className="flex items-center">
                        <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="Relume logo" />
                    </a>
                </div>
                <TopbarActions
                    isSearchIconClicked={isSearchIconClicked}
                    setIsSearchIconClicked={setIsSearchIconClicked}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                />
            </div>

            <AnimatePresence>
                {isSearchIconClicked && (
                    <motion.div
                        variants={{
                            visible: { opacity: 1 },
                            hidden: { opacity: 0 },
                        }}
                        initial="hidden"
                        exit="hidden"
                        animate={isSearchIconClicked ? "visible" : "hidden"}
                        className="fixed left-0 right-0 top-16 z-20 flex min-h-16 w-full items-center justify-center border-b border-border-primary bg-primary px-6 lg:hidden"
                    >
                        <Input
                            className="h-fit w-full"
                            placeholder="Search"
                            icon={<BiSearch className="size-6" />}
                        />
                        <button onClick={() => setIsSearchIconClicked(false)}>
                            <RxCross2 className="ml-4 size-6" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const TopbarActions = ({
    isSearchIconClicked,
    setIsSearchIconClicked,
    isDropdownOpen,
    setIsDropdownOpen,
}: {
    isSearchIconClicked: boolean;
    setIsSearchIconClicked: (value: boolean) => void;
    isDropdownOpen: boolean;
    setIsDropdownOpen: (value: boolean) => void;
}) => {
    return (
        <div className="flex items-center gap-2 md:gap-4">
            <button
                onClick={() => setIsSearchIconClicked(!isSearchIconClicked)}
                className="p-2 lg:hidden"
            >
                <BiSearch className="size-6" />
            </button>
            <DropdownMenu>
                <DropdownMenuTrigger className="relative border-none">
                    <div className="absolute bottom-auto left-auto right-2 top-2 size-2 rounded-full bg-off-white" />
                    <BiBell className="size-6" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="max-w-[19rem] px-0" align="end" sideOffset={0}>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between px-4 py-2">
                            <DropdownMenuLabel className="p-0">Notifications</DropdownMenuLabel>
                            <a href="#">Mark as read</a>
                        </div>
                        <DropdownMenuSeparator />
                        <div className="h-full max-h-[14rem] overflow-auto px-2 py-1">
                            <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                                <div className="flex size-full flex-col items-start justify-start">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        alt="Avatar"
                                        className="size-6"
                                    />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="mt-2 text-sm">11 Jan 2022</p>
                                </div>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="mt-2 grid grid-cols-[max-content_1fr] gap-2 px-2 py-1">
                                <div className="flex size-full flex-col items-start justify-start">
                                    <img
                                        src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
                                        alt="Avatar"
                                        className="size-6"
                                    />
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="mt-2 text-sm">11 Jan 2022</p>
                                </div>
                            </DropdownMenuItem>
                        </div>
                    </div>
                    <DropdownMenuSeparator />
                    <div className="flex w-full items-end justify-end px-4 py-2">
                        <Button variant="link" size="link" iconRight={<RxChevronRight />} asChild>
                            <a href="#">View All</a>
                        </Button>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>

            <img
                src="https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg"
                alt="Avatar"
                className="size-10 rounded-full object-cover"
            />

        </div>
    );
};

const AppSidebar = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <Sidebar className="py-6 bg-sidebar" closeButtonClassName="fixed top-4 right-4 text-white">
                <SidebarHeader className="hidden lg:block bg-sidebar text-white">
                    <a href="#">
                        <img src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg" alt="Relume logo" />
                    </a>
                </SidebarHeader>
                <SidebarContent className="pt-6 bg-sidebar">
                    <SidebarMenu>
                        {menuItems.map((item, index) => (
                            <SidebarMenuButton asChild>
                                <a href={item.url} className="flex w-full items-center text-off-white">
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        ))}
                    </SidebarMenu>
                </SidebarContent>
                <SidebarFooter className="pb-6 lg:pb-0 bg-sidebar">
                    <div>
                        {footerItems.map((item, index) => (
                            <SidebarMenuItem key={index}>
                                <SidebarMenuButton asChild>
                                    <a href={item.url} className="flex w-full items-center text-off-white">
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </a>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </div>
                </SidebarFooter>
            </Sidebar>
            <main className="min-h-screen w-full pt-16 lg:pt-0">{children}</main>
        </SidebarProvider>
    );
};
