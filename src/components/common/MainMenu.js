import {
  homeItems,
  blogItems,
  listingItems,
  propertyItems,
  pageItems,
} from "@/data/navItems";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const pathname = usePathname();
  const [topMenu, setTopMenu] = useState("");
  const [submenu, setSubmenu] = useState("");

  useEffect(() => {
    homeItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("home");
      }
    });
    blogItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("blog");
      }
    });
    pageItems.forEach((elm) => {
      if (elm.href.split("/")[1] == pathname.split("/")[1]) {
        setTopMenu("pages");
      }
    });
    propertyItems.forEach((item) =>
      item.subMenuItems.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("property");
          setSubmenu(item.label);
        }
      })
    );
    listingItems.forEach((item) =>
      item.submenu.forEach((elm) => {
        if (elm.href.split("/")[1] == pathname.split("/")[1]) {
          setTopMenu("listing");
          setSubmenu(item.title);
        }
      })
    );

    // Hakkımızda (About) kontrolü
    if (pathname.includes("about")) {
      setTopMenu("about");
    }
  }, [pathname]);

  const handleActive = (link) => {
    if (link.split("/")[1] == pathname.split("/")[1]) {
      return "menuActive";
    }
  };

  return (
    <ul className="ace-responsive-menu">
      <li className="megamenu_style dropitem">
        <Link className="list-item" href="/grid-full-3-col">
          <span className={topMenu == "listing" ? "title menuActive" : "title"}>
            Tüm İlanlar
          </span>
        </Link>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="blog-list-v1">
          <span className={topMenu == "blog" ? "title menuActive" : "title"}>
            Blog
          </span>
        </a>
      </li>

      <li className="visible_list dropitem">
        <a className="list-item" href="about">
          <span className={topMenu == "about" ? "title menuActive" : "title"}>
            Hakkımızda
          </span>
        </a>
      </li>
    </ul>
  );
};

export default MainMenu;
