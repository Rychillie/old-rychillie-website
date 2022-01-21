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

const NavigationBottom = ({ pageProps }: any) => {
  // detect if is page or not with router
  const router = useRouter();

  return (
    <TooltipPrimitive.TooltipProvider
      delayDuration={64}
      skipDelayDuration={250}
    >
      <ToolbarPrimitive.Root
        tabIndex={1}
        orientation="vertical"
        className={toolbar({
          css: {
            width: "100%",
            display: "flex",
            position: "absolute",
            flexDirection: "row",
            justifyContent: "space-between",
            borderTop: "1px solid $mauve1",
            alignItems: "center",
            p: "$4 $7",
            bottom: 0,
            left: 0,
            right: 0,
            "@bp1": {
              justifyContent: "center",
              gridTemplateColumns: "1fr 1fr 1fr",
              gridGap: "10%",
            },
            "@bp2": {
              display: "none",
            },
          },
        })}
        aria-label="Main navigation"
      >
        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            <ToolbarPrimitive.Link
              href="/home"
              className={toolbarLink({
                active: router.pathname === "/home" ? true : false,
                css: {
                  "@bp3": {
                    display: "none",
                  },
                },
              })}
            >
              <Icons.HomeIcon />
            </ToolbarPrimitive.Link>
          </TooltipPrimitive.Trigger>

          <TooltipPrimitive.Content sideOffset={5} className={tooltipContent()}>
            Home
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>

        <ToolbarPrimitive.Separator
          className={toolbarSeparator({
            css: {
              "@bp3": {
                display: "none",
              },
            },
          })}
        />

        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            <ToolbarPrimitive.Link
              href="/writing"
              className={toolbarLink({
                active: router.pathname === "/writing" ? true : false,
                css: {
                  "@bp3": {
                    display: "none",
                  },
                },
              })}
            >
              <Icons.Pencil1Icon />
            </ToolbarPrimitive.Link>
          </TooltipPrimitive.Trigger>

          <TooltipPrimitive.Content sideOffset={5} className={tooltipContent()}>
            Writing
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>

        <ToolbarPrimitive.Separator
          className={toolbarSeparator({
            css: {
              "@bp3": {
                display: "none",
              },
            },
          })}
        />

        <TooltipPrimitive.Root>
          <TooltipPrimitive.Trigger asChild>
            <ToolbarPrimitive.Link
              href="/learn"
              className={toolbarLink({
                active: router.pathname === "/learn" ? true : false,
                css: {
                  "@bp3": {
                    display: "none",
                  },
                },
              })}
            >
              <Icons.RocketIcon />
            </ToolbarPrimitive.Link>
          </TooltipPrimitive.Trigger>

          <TooltipPrimitive.Content sideOffset={5} className={tooltipContent()}>
            Learn
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Root>
      </ToolbarPrimitive.Root>
    </TooltipPrimitive.TooltipProvider>
  );
};

export default NavigationBottom;
