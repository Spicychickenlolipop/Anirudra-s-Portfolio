import { create } from "zustand";

const useTrashStore = create((set) => ({
  // 🔥 DEFAULT TRASH CONTENT
  trash: [
    {
      id: "love-letter",
      name: "love-letter.txt",
      kind: "file",
      fileType: "txt",
      icon: "/images/txt.png",
      content: `Dear Recruiter ❤️,

If you're reading this, you’ve discovered a hidden part of my portfolio.

I enjoy building systems that feel real, interactive, and thoughtful — not just static UI.

This portfolio itself is an example of how I think:
clean design, strong logic, and attention to detail.

Looking forward to building something impactful with you.

— Anirudra`,
    },
  ],

  /* ================= MOVE TO TRASH ================= */
  moveToTrash: (item, from) =>
    set((state) => ({
      trash: [...state.trash, { ...item, from }],
    })),

  /* ================= RESTORE ================= */
  restoreFromTrash: (name) =>
    set((state) => {
      const item = state.trash.find((i) => i.name === name);

      if (item?.from) {
        item.from.children.push(item);
      }

      return {
        trash: state.trash.filter((i) => i.name !== name),
      };
    }),

  /* ================= EMPTY TRASH ================= */
  emptyTrash: () =>
    set((state) => ({
      // ❗ keep love-letter even after empty
      trash: state.trash.filter(
        (item) => item.id === "love-letter"
      ),
    })),
}));

export default useTrashStore;