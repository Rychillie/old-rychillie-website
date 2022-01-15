import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState } from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as ToolbarPrimitive from "@radix-ui/react-toolbar";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import * as Icons from "@radix-ui/react-icons";
import {
  toggleGroup,
  toggleItem,
  toolbar,
  toolbarButton,
  toolbarLink,
  toolbarSeparator,
} from "@styles/toolbar";
import { dropdownContent, dropdownItem } from "@styles/dropdown";
import { tooltipContent } from "@styles/tooltip";
import { Container } from "@styles/structure";

const NavigationTop = ({ pageProps }: any) => {
  // detect if is page or not with router
  const router = useRouter();

  return (
    <nav
      className={Container({
        css: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid $mauve6",
          alignItems: "center",
          pt: "$4",
          pb: "$4",
          mb: "$2",
          "@bp3": {
            borderBottom: "none",
            pt: "$5",
            pb: "$5",
            mb: "$3",
          },
          "@bp4": {
            pt: "$6",
            pb: "$6",
            mb: "$4",
          },
        },
      })}
    >
      <h1>🦄</h1>

      <TooltipPrimitive.TooltipProvider
        delayDuration={64}
        skipDelayDuration={250}
      >
        <ToolbarPrimitive.Root
          tabIndex={1}
          orientation="vertical"
          className={toolbar()}
          aria-label="Main navigation"
        >
          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <ToolbarPrimitive.Link
                href="/home"
                className={toolbarLink({
                  active: router.pathname === "/home" ? true : false,
                  css: {
                    display: "none",
                    "@bp3": {
                      display: "flex",
                    },
                  },
                })}
              >
                <Icons.HomeIcon />
              </ToolbarPrimitive.Link>
            </TooltipPrimitive.Trigger>

            <TooltipPrimitive.Content
              sideOffset={5}
              className={tooltipContent()}
            >
              Home
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>

          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <ToolbarPrimitive.Link
                href="/writing"
                className={toolbarLink({
                  active: router.pathname === "/writing" ? true : false,
                  css: {
                    display: "none",
                    "@bp3": {
                      display: "flex",
                    },
                  },
                })}
              >
                <Icons.Pencil1Icon />
              </ToolbarPrimitive.Link>
            </TooltipPrimitive.Trigger>

            <TooltipPrimitive.Content
              sideOffset={5}
              className={tooltipContent()}
            >
              Writing
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>

          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <ToolbarPrimitive.Link
                href="/learn"
                className={toolbarLink({
                  active: router.pathname === "/learn" ? true : false,
                  css: {
                    display: "none",
                    "@bp3": {
                      display: "flex",
                    },
                  },
                })}
              >
                <Icons.RocketIcon />
              </ToolbarPrimitive.Link>
            </TooltipPrimitive.Trigger>

            <TooltipPrimitive.Content
              sideOffset={5}
              className={tooltipContent()}
            >
              Learn
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>

          <ToolbarPrimitive.Separator
            className={toolbarSeparator({
              css: {
                display: "none",
                "@bp3": {
                  display: "flex",
                },
              },
            })}
          />

          <TooltipPrimitive.Root>
            <TooltipPrimitive.Trigger asChild>
              <ToolbarPrimitive.Link className={toolbarLink()}>
                <Icons.MagnifyingGlassIcon />
              </ToolbarPrimitive.Link>
            </TooltipPrimitive.Trigger>

            <TooltipPrimitive.Content
              sideOffset={5}
              className={tooltipContent()}
            >
              Search
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Root>

          {/*
            <TooltipPrimitive.Root>
              <TooltipPrimitive.Trigger asChild>
                <ToolbarPrimitive.Link
                  href="https://github.com/rychillie"
                  target="_blank"
                  className={toolbarLink()}
                >
                  <Icons.GitHubLogoIcon />
                </ToolbarPrimitive.Link>
              </TooltipPrimitive.Trigger>
              <TooltipPrimitive.Content
                sideOffset={5}
                className={tooltipContent()}
              >
                GitHub
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>

            <TooltipPrimitive.Root>
              <TooltipPrimitive.Trigger asChild>
                <ToolbarPrimitive.Link
                  href="https://twitter.com/rychillie"
                  target="_blank"
                  className={toolbarLink()}
                >
                  <Icons.TwitterLogoIcon />
                </ToolbarPrimitive.Link>
              </TooltipPrimitive.Trigger>
              <TooltipPrimitive.Content
                sideOffset={5}
                className={tooltipContent()}
              >
                Twitter
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
            <ToolbarPrimitive.Separator className={toolbarSeparator()} />

            <ToolbarPrimitive.ToggleGroup
                type="single"
                aria-label="Mode"
                defaultValue="light"
                className={toggleGroup()}
            >
                <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    <ToolbarPrimitive.ToolbarToggleItem
                    value="light"
                    className={toggleItem()}
                    // onClick={toggleTheme}
                    >
                    <Icons.SunIcon />
                    </ToolbarPrimitive.ToolbarToggleItem>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                    sideOffset={10}
                    className={tooltipContent()}
                >
                    Light
                </TooltipPrimitive.Content>
                </TooltipPrimitive.Root>

                <TooltipPrimitive.Root>
                <TooltipPrimitive.Trigger asChild>
                    <ToolbarPrimitive.ToolbarToggleItem
                    value="dark"
                    className={toggleItem()}
                    >
                    <Icons.MoonIcon />
                    </ToolbarPrimitive.ToolbarToggleItem>
                </TooltipPrimitive.Trigger>
                <TooltipPrimitive.Content
                    sideOffset={10}
                    className={tooltipContent()}
                >
                    Dark
                </TooltipPrimitive.Content>
                </TooltipPrimitive.Root>
            </ToolbarPrimitive.ToggleGroup>
            */}

          <DropdownPrimitive.Root>
            <TooltipPrimitive.Root>
              <DropdownPrimitive.Trigger asChild>
                <TooltipPrimitive.Trigger asChild>
                  <ToolbarPrimitive.Button
                    aria-label="Login"
                    className={toolbarButton({
                      css: {
                        ml: "auto",
                        "&[data-state=open]": {
                          color: "$hiContrast",
                          backgroundImage:
                            "linear-gradient(25deg, #FA3CF9 1.7%, #FC587E 50.85%, #FC3239 99.99%)",
                        },
                      },
                    })}
                  >
                    <Icons.AvatarIcon />
                  </ToolbarPrimitive.Button>
                </TooltipPrimitive.Trigger>
              </DropdownPrimitive.Trigger>
              <DropdownPrimitive.Content
                sideOffset={5}
                className={dropdownContent()}
              >
                <DropdownPrimitive.Item className={dropdownItem()}>
                  <Icons.GearIcon />
                  Settings
                </DropdownPrimitive.Item>
                <DropdownPrimitive.Item className={dropdownItem()}>
                  <Icons.ExitIcon /> Logout
                </DropdownPrimitive.Item>
              </DropdownPrimitive.Content>
              <TooltipPrimitive.Content
                sideOffset={5}
                className={tooltipContent()}
              >
                Account
              </TooltipPrimitive.Content>
            </TooltipPrimitive.Root>
          </DropdownPrimitive.Root>
        </ToolbarPrimitive.Root>
      </TooltipPrimitive.TooltipProvider>
    </nav>
  );
};

export default NavigationTop;
