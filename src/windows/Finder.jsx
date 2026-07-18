import { WindowControls } from "#components";
import { locations } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";
import useTrashStore from "#store/trash";
import clsx from "clsx";
import { Search } from "lucide-react";

const Finder = () => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  const {
    trash,
    moveToTrash,
    restoreFromTrash,
    emptyTrash,
  } = useTrashStore();

  /* ================= OPEN ITEM ================= */
  const openItem = (item) => {
    if (item.fileType === "pdf") return openWindow("resume");

    if (item.kind === "folder") return setActiveLocation(item);

    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  };

  /* ================= DELETE ================= */
//   const handleDelete = (item) => {
//     moveToTrash(item, activeLocation);

//     activeLocation.children = activeLocation.children.filter(
//       (i) => i.id !== item.id
//     );

//     setActiveLocation({ ...activeLocation });
//   };
const handleDelete = (item) => {
  moveToTrash(item, activeLocation);

  const updatedChildren = activeLocation.children.filter(
    (i) => i.id !== item.id
  );

  setActiveLocation({
    ...activeLocation,
    children: updatedChildren,
  });
};




  /* ================= RESTORE ================= */
  const handleRestore = (item) => {
    restoreFromTrash(item.name);
  };

  /* ================= ITEMS ================= */
  const items = activeLocation?.isTrash
    ? trash
    : activeLocation?.children || [];

  const favorites = Object.values(locations);
  const projects = locations.work.children;

  const renderSidebarList = (name, listItems) => (
    <div className="finder-sidebar-group">
      <h3 className="finder-sidebar-heading">{name}</h3>
      <ul className="finder-sidebar-list">
        {listItems.map((item) => (
          <li
            key={item.id}
            onClick={() => {
              if (item.kind === "folder") {
                setActiveLocation(item);
              }
            }}
            className={clsx(
              "finder-sidebar-item",
              item.id === activeLocation?.id ? "active" : "not-active"
            )}
          >
            <img src={item.icon} className="w-4 h-4 shrink-0" alt="" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="finder-window w-[750px] h-[400px] flex flex-col">
      <div
        id="window-header"
        className="flex items-center gap-3 p-2 bg-gray-200 shrink-0"
      >
        <WindowControls target="finder" />
        <Search className="icon max-sm:hidden" />

        {activeLocation?.isTrash && (
          <button
            onClick={emptyTrash}
            className="ml-auto text-xs bg-red-500 text-white px-2 py-1 rounded"
          >
            Empty Trash
          </button>
        )}
      </div>

      <div className="finder-body bg-white flex flex-1 min-h-0 overflow-hidden">
        <aside className="finder-sidebar sidebar">
          {renderSidebarList("Favorites", favorites)}
          {renderSidebarList("Projects", projects)}
        </aside>

        <div className="finder-main flex flex-col flex-1 min-h-0 min-w-0">
          <div className="finder-toolbar">
            <p className="finder-path">{activeLocation?.name ?? "Portfolio"}</p>
          </div>

          <ul className="finder-content content">
            {items.length === 0 ? (
              <li className="finder-empty">No items here</li>
            ) : (
              items.map((item) => (
                <li
                  key={item.id}
                  className={clsx("finder-item", item.position)}
                  onClick={() => openItem(item)}
                >
                  <div className="finder-item-icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <p className="finder-item-name">{item.name}</p>

                  {!activeLocation?.isTrash && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(item);
                      }}
                      className="finder-item-action finder-item-delete"
                    >
                      Delete
                    </button>
                  )}

                  {activeLocation?.isTrash && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRestore(item);
                      }}
                      className="finder-item-action finder-item-restore"
                    >
                      Restore
                    </button>
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
