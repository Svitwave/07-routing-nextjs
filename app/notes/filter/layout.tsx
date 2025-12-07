// // app/notes/filter/layout.tsx

// type Props = {
//   children: React.ReactNode;
// };

// const NotesLayout = ({ children }: Props) => {
//   return (
//     <section>
//       <div>{children}</div>
//     </section>
//   );
// };

// export default NotesLayout;

// type Props = {
//   children: React.ReactNode;
//   sidebar: React.ReactNode;
// };

// const NotesLayout = ({ children, sidebar }: Props) => {
//   return (
//     <section>
//       <aside>{sidebar}</aside>
//       <div>{children}</div>
//     </section>
//   );
// };

// export default NotesLayout;

import { Suspense } from "react";
import css from "./layout.module.css";

export default function FilterLayout({
  children,
  sidebar,
}: Readonly<{
  children: React.ReactNode;
  sidebar: React.ReactNode;
}>) {
  return (
    <div className={css.container}>
      <aside className={css.sidebar}>
        <Suspense fallback={<div>Loading sidebar...</div>}>{sidebar}</Suspense>
      </aside>
      <main className={css.notesWrapper}>{children}</main>
    </div>
  );
}
