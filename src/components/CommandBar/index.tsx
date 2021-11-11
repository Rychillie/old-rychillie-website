import * as React from "react";
import { useRouter } from "next/router";
import {
  KBarAnimator,
  KBarProvider,
  KBarPortal,
  useMatches,
  KBarPositioner,
  KBarSearch,
  KBarResults,
} from "kbar";
import styles from "./styles.module.scss";

export default function CommandBar(props: any) {
  const router = useRouter();

  const actions = [
    {
      id: "copy",
      name: "Copy URL",
      shortcut: ["u"],
      keywords: "copy-url",
      section: "General",
      perform: () => navigator.clipboard.writeText(window.location.href),
      icon: <i className="ri-file-copy-line" style={iconStyle} />,
    },
    {
      id: "email",
      name: "Send Email",
      shortcut: ["e"],
      keywords: "send-email",
      section: "General",
      perform: () => window.open("mailto:hi@zenorocha.com", "_blank"),
      icon: <i className="ri-mail-line" style={iconStyle} />,
    },
    {
      id: "source",
      name: "View Source",
      shortcut: ["s"],
      keywords: "view-source",
      section: "General",
      perform: () =>
        window.open("https://github.com/Rychillie/rychillie.net", "_blank"),
      icon: <i className="ri-braces-line" style={iconStyle} />,
    },
    {
      id: "home",
      name: "Home",
      shortcut: ["g", "h"],
      keywords: "go-home",
      section: "Go To",
      perform: () => router.push("/"),
      icon: <i className="ri-home-5-line" style={iconStyle} />,
    },
    {
      id: "about",
      name: "About",
      shortcut: ["g", "a"],
      keywords: "go-about",
      section: "Go To",
      perform: () => router.push("/about"),
      icon: <i className="ri-user-line" style={iconStyle} />,
    },
    {
      id: "articles",
      name: "Articles",
      shortcut: ["g", "b"],
      keywords: "go-articles",
      section: "Go To",
      perform: () => router.push("/blog"),
      icon: <i className="ri-ball-pen-line" style={iconStyle} />,
    },
    {
      id: "projects",
      name: "Projects",
      shortcut: ["g", "p"],
      keywords: "go-projects",
      section: "Go To",
      perform: () => router.push("/work"),
      icon: <i className="ri-lightbulb-line" style={iconStyle} />,
    },
    {
      id: "uses",
      name: "Uses",
      shortcut: ["g", "u"],
      keywords: "go-uses",
      section: "Go To",
      perform: () => router.push("/uses"),
      icon: <i className="ri-computer-line" style={iconStyle} />,
    },
    {
      id: "github",
      name: "Github",
      shortcut: ["f", "g"],
      keywords: "go-github",
      section: "Follow",
      perform: () => window.open("https://github.com/Rychillie", "_blank"),
      icon: <i className="ri-github-line" style={iconStyle} />,
    },
    {
      id: "twitter",
      name: "Twitter",
      shortcut: ["f", "t"],
      keywords: "go-twitter",
      section: "Follow",
      perform: () => window.open("https://twitter.com/rychillie", "_blank"),
      icon: <i className="ri-twitter-line" style={iconStyle} />,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      shortcut: ["f", "l"],
      keywords: "go-linkedin",
      section: "Follow",
      perform: () => window.open("https://linkedin.com/in/rychillie", "_blank"),
      icon: <i className="ri-linkedin-line" style={iconStyle} />,
    },
    {
      id: "instagram",
      name: "Instagram",
      shortcut: ["f", "i"],
      keywords: "go-instagram",
      section: "Follow",
      perform: () => window.open("https://instagram.com/rychillie", "_blank"),
      icon: <i className="ri-instagram-line" style={iconStyle} />,
    },
  ];

  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className={styles.positionrStyle}>
          <KBarAnimator className="kbar-blur" style={animatorStyle}>
            <KBarSearch
              style={searchStyle}
              placeholder="Type a command or search…"
            />
            <RenderResults />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>

      {props.children}
    </KBarProvider>
  );
}

function RenderResults() {
  const groups = useMatches();
  const flattened = React.useMemo(
    () =>
      groups.reduce((acc: any, curr: any) => {
        acc.push(curr.name);
        acc.push(curr.name);
        acc.push(...curr.actions);
        return acc;
      }, []),
    [groups]
  );

  return (
    <KBarResults
      items={flattened}
      onRender={({ item, active }) =>
        typeof item === "string" ? (
          <div style={groupNameStyle}>{item}</div>
        ) : (
          <ReasultItem action={item} active={active} />
        )
      }
    />
  );
}

const ReasultItem = ({ action, active }: any, ref: any) => {
  return (
    <div ref={ref} style={getResultStyle(active)}>
      <div style={actionStyle}>
        {action.icon && action.icon}
        <div style={actionRowStyle}>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div style={shortcutStyle}>
          {action.shortcut.map((shortcut: any) => (
            <kbd key={shortcut} style={kbdStyle}>
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  );
};

// const ResultItem = React.forwardRef(({ action, active }, ref) => {
//   return (
//   );
// });

const positionerStyle = {
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 0 16px",
  background: "rgba(0, 0, 0, .8)",
} as React.CSSProperties;

const animatorStyle = {
  maxWidth: "600px",
  width: "100%",
  color: "var(--primaryColor)",
  borderRadius: "8px",
  overflow: "hidden",
} as React.CSSProperties;

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  border: "none",
  margin: 0,
  background: "var(--commandColor)",
  color: "var(--primaryColor)",
} as React.CSSProperties;

const groupNameStyle = {
  padding: "8px 16px",
  fontSize: "10px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  background: "var(--commandColor)",
} as React.CSSProperties;

const iconStyle = {
  fontSize: "20px",
  position: "relative",
  top: "-2px",
} as React.CSSProperties;

const kbdStyle = {
  padding: "4px 8px",
  textTransform: "uppercase",
  color: "var(--secondaryColor)",
  background: "rgba(255, 255, 255, .1)",
} as React.CSSProperties;

const shortcutStyle = {
  display: "grid",
  gridAutoFlow: "column",
  gap: "4px",
} as React.CSSProperties;

const actionStyle = {
  display: "flex",
  gap: "8px",
  alignItems: "center",
} as React.CSSProperties;

const actionRowStyle = {
  display: "flex",
  flexDirection: "column",
} as React.CSSProperties;

const getResultStyle = (active: boolean) => {
  return {
    padding: "12px 16px",
    background: active ? "rgba(255, 255, 255, 0.1)" : "var(--commandColor)",
    borderLeft: `2px solid ${active ? "var(--primaryColor)" : "transparent"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 0,
    cursor: "pointer",
    color: active ? "var(--primaryColor)" : "var(--secondaryColor)",
  };
};
